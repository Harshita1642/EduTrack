import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Users, Video } from 'lucide-react'

const server= "http://localhost:5000";
export default function AdminDashboard({ user }) {
  const navigate = useNavigate()
  const [stats, setStats] = useState({
    totalCoures: 0,
    totalLectures: 0,
    totalUsers: 0
  })

  useEffect(() => {
    if (user && user.role !== "admin") {
      navigate("/")
    } else {
      fetchStats()
    }
  }, [user, navigate])

  async function fetchStats() {
    try {
      const { data } = await axios.get(`${server}/api/stats`, {
        headers: {
          token: localStorage.getItem("token"),
        },
      })
      setStats(data.stats)
    } catch (error) {
      console.error("Error fetching stats:", error)
    }
  }

  return (
  
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatsCard
            title="Total Courses"
            value={stats.totalCoures}
            icon={<BookOpen className="h-8 w-8 text-purple-500" />}
          />
          <StatsCard
            title="Total Lectures"
            value={stats.totalLectures}
            icon={<Video className="h-8 w-8 text-purple-500" />}
          />
          <StatsCard
            title="Total Users"
            value={stats.totalUsers}
            icon={<Users className="h-8 w-8 text-purple-500" />}
          />
        </div>
      </div>

  )
}

function StatsCard({ title, value, icon }) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
      </CardContent>
    </Card>
  )
}