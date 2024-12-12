import { useNavigate } from "react-router-dom"
import { UserData } from "../context/UserContext"
import { motion } from "framer-motion"
import { LayoutDashboard, LogOut, Mail, User, Shield } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { toast } from "react-hot-toast"

export default function Account() {
  const { user } = UserData()
  const navigate = useNavigate()

  const logoutHandler = () => {
    localStorage.clear()
    setUser([])
    setIsAuth(false)
    toast.success("Logged Out")
    navigate("/login")
  }

  if (!user) return null

  return (
    <div className="flex min-h-[100vh] items-center justify-center bg-gray-50/50 p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="px-4 max-w-3xl mx-auto"
      >
        <Card className="overflow-hidden shadow-lg">
          <CardContent className="p-8">
            <div className="flex flex-col items-center space-y-4">
              <Avatar className="h-24 w-24 bg-red-500 text-white ring-4 ring-red-100">
                <AvatarImage
                  src={`https://api.dicebear.com/6.x/initials/svg?seed=${user.name}`}
                  alt={user.name}
                />
                <AvatarFallback>{user.name.charAt(0).toUpperCase()}</AvatarFallback>
              </Avatar>
              <div className="text-center space-y-1">
                <h1 className="text-2xl font-bold tracking-tight">{user.name}</h1>
                <p className="text-sm text-gray-500">{user.email}</p>
              </div>
            </div>

            <Separator className="my-8" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InfoCard icon={User} label="Role" value={user.role || "Student"} />
              <InfoCard icon={Mail} label="Email" value={user.email} />
              <InfoCard icon={LayoutDashboard} label="Courses Enrolled" value="5" />
              <InfoCard icon={Shield} label="Account Status" value="Active" />
            </div>

            <Separator className="my-8" />

            
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}


const InfoCard = ({ icon: Icon, label, value }) => (
  <div className="flex items-center p-4 bg-muted rounded-lg">
    <Icon className="h-5 w-5 text-primary mr-3" />
    <div>
      <p className="text-sm font-medium text-muted-foreground">{label}</p>
      <p className="text-lg font-semibold">{value}</p>
    </div>
  </div>
);