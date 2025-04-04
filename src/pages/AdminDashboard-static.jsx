"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
    Users,
    Plus,
    Play,
    CheckCircle,
    Trash2,
    LogOut,
    AlertTriangle,
    Search,
    RefreshCw,
    Shield,
    Send,
    UserPlus,
    Moon,
    Sun,
    BarChart2,
    Flag,
    ArrowRight,
    Calendar,
} from "lucide-react"

// Generate random data for demo mode
const generateRandomUsers = (count = 15) => {
    const firstNames = [
        "Saipranav",
        "Vivaan",
        "Rahul",
        "Sai",
        "Rahul",
        "Amit",
        "Kiran",
        "Neha",
        "Priya",
        "Ananya",
        "Ishaan",
        "Riya",
        "Tanvi",
        "Kabir",
        "Sanya"
    ];

    const lastNames = [
        "Sharma",
        "Verma",
        "Reddy",
        "Iyer",
        "Patel",
        "Nair",
        "Gupta",
        "Chopra",
        "Agarwal",
        "Kumar",
        "Yadav",
        "Mehta",
        "Joshi",
        "Singh",
        "Das"
    ];

    const domains = ["gmail.com", "yahoo.com", "outlook.com", "hotmail.com", "example.com"]

    return Array.from({ length: count }, (_, i) => {
        const firstName = firstNames[Math.floor(Math.random() * firstNames.length)]
        const lastName = lastNames[Math.floor(Math.random() * lastNames.length)]
        const domain = domains[Math.floor(Math.random() * domains.length)]
        const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@${domain}`
        const phone = `+1 (${Math.floor(Math.random() * 900) + 100}) ${Math.floor(Math.random() * 900) + 100}-${Math.floor(Math.random() * 9000) + 1000}`
        const status = Math.random() > 0.5

        return {
            secret_id: `SC${i + 1}`,
            first_name: firstName,
            last_name: lastName,
            email,
            phone,
            status,
        }
    })
}

const generateRandomElectionResults = () => {
    const candidates = [
        "Rahul VS",
        "Saipranav M",
        "Amitabh Singh",
        "Neha Iyer"
    ];
    const parties = [
        "United People's Front",
        "Harmony Alliance",
        "Future Vision Party",
        "Integrity League",
        "New Horizon Movement",
        "People's Voice Coalition",
        "Evergreen Union",
        "Synergy Party",
        "Nation First Front",
        "Progressive Synergy Forum"
    ];


    const results = {}
    candidates.forEach((candidate, index) => {
        results[`${candidate} (${parties[index]})`] = Math.floor(Math.random() * 500) + 50
    })

    return results
}

// Theme Toggle Component
const ThemeToggle = ({ theme, setTheme }) => {
    const isDark = theme === "dark"

    const handleThemeToggle = () => {
        setTheme(isDark ? "light" : "dark")
    }

    return (
        <button
            onClick={handleThemeToggle}
            className="p-2 rounded-full bg-purple-800/50 text-white hover:bg-purple-700/50 transition-colors"
            aria-label="Toggle theme"
        >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
    )
}

// Login Toggle Component for Login Management Tab
function LoginToggleSection({ theme }) {
    const [isEnabled, setIsEnabled] = useState(true)
    const [isAnimating, setIsAnimating] = useState(false)
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState("")
    const isDark = theme === "dark"

    const handleToggle = async () => {
        setIsAnimating(true)
        setLoading(true)
        setSuccess(false)
        setError("")

        // Simulate API call
        setTimeout(() => {
            setIsEnabled(!isEnabled)
            setSuccess(true)
            setLoading(false)
            setTimeout(() => {
                setSuccess(false)
                setIsAnimating(false)
            }, 1500)
        }, 1000)
    }

    return (
        <motion.div
            className={`p-6 h-screen w-full overflow-auto ${isDark ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-900"}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
        >
            <h2 className={`text-2xl font-bold ${isDark ? "text-white" : "text-purple-900"} mb-6 text-center`}>
                Login Management
            </h2>

            <div className={`${isDark ? "bg-gray-700" : "bg-white"} rounded-xl shadow-md p-6 max-w-2xl mx-auto`}>
                <div className="space-y-6">
                    <div>
                        <h3 className={`text-lg font-medium ${isDark ? "text-white" : "text-gray-900"} mb-3`}>
                            Voter Login Status
                        </h3>
                        <p className={`${isDark ? "text-gray-300" : "text-gray-600"} mb-4`}>
                            Toggle the login functionality for voters. When disabled, voters will not be able to log in to the system.
                        </p>

                        <div className="flex items-center justify-between">
              <span className={`${isDark ? "text-gray-200" : "text-gray-700"} font-medium`}>
                Login is currently:{" "}
                  <span className={isEnabled ? "text-green-500" : "text-red-500"}>
                  {isEnabled ? "Enabled" : "Disabled"}
                </span>
              </span>

                            <motion.button
                                onClick={handleToggle}
                                className={`relative flex items-center gap-2 px-4 py-2 rounded-lg shadow-lg ${
                                    isEnabled ? "bg-green-500 hover:bg-green-600" : "bg-red-500 hover:bg-red-600"
                                } text-white font-medium transition-colors`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                disabled={loading || isAnimating}
                            >
                                <Flag className="w-4 h-4" />
                                <span>{loading ? "Updating..." : isEnabled ? "Disable Login" : "Enable Login"}</span>

                                <motion.div
                                    className="absolute inset-0 rounded-lg bg-white"
                                    initial={{ opacity: 0 }}
                                    animate={isAnimating ? { opacity: 0.3, scale: [1, 1.5] } : { opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                />
                            </motion.button>
                        </div>
                    </div>

                    {error && (
                        <div className={`p-3 ${isDark ? "bg-red-900/50 text-red-200" : "bg-red-100 text-red-800"} rounded-md`}>
                            {error}
                        </div>
                    )}

                    <AnimatePresence>
                        {success && (
                            <motion.div
                                className={`p-3 ${isDark ? "bg-green-900/50 text-green-200" : "bg-green-100 text-green-800"} rounded-md flex items-center`}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                            >
                                <CheckCircle className="w-5 h-5 mr-2" />
                                <span>Login status updated successfully!</span>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            <motion.div
                className="mt-6 text-center text-yellow-300/70 text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
            >
                <p>DEMO MODE - No API calls are being made</p>
            </motion.div>
        </motion.div>
    )
}

// Replace the entire AdminSidebar component with this collapsible version
function AdminSidebar({ activeTab, setActiveTab, theme, setTheme }) {
    const isDark = theme === "dark"
    const [collapsed, setCollapsed] = useState(false)

    const menuItems = [
        { id: "users", label: "User Management", icon: Users },
        { id: "add-user", label: "Add User", icon: UserPlus },
        { id: "elections", label: "Create Elections", icon: Play },
        { id: "results", label: "View Results", icon: BarChart2 },
        { id: "login-toggle", label: "Login Management", icon: Flag },
        { id: "delete", label: "Delete Data", icon: Trash2 },
    ]

    const handleLogout = () => {
        localStorage.removeItem("demoMode")
        window.location.href = "/login"
    }

    return (
        <motion.div
            className={`${collapsed ? "w-20" : "w-64"} ${isDark ? "bg-gray-900" : "bg-purple-900"} h-screen p-4 flex flex-col relative transition-all duration-300 ease-in-out`}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            {/* Toggle button */}
            <motion.button
                onClick={() => setCollapsed(!collapsed)}
                className={`absolute -right-3 top-12 bg-pink-600 text-white p-1 rounded-full shadow-lg z-10`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                {collapsed ? (
                    <motion.div initial={{ rotate: 0 }} animate={{ rotate: 180 }}>
                        <ArrowRight size={16} />
                    </motion.div>
                ) : (
                    <motion.div initial={{ rotate: 180 }} animate={{ rotate: 0 }}>
                        <ArrowRight size={16} />
                    </motion.div>
                )}
            </motion.button>

            <div className={`flex items-center ${collapsed ? "justify-center" : "gap-3"} mb-8`}>
                <Shield className="w-8 h-8 text-pink-400" />
                {!collapsed && (
                    <motion.h1
                        className="text-2xl font-bold text-white"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <span className="text-white">SecUr</span>
                        <span className="text-pink-400">Vote</span>
                        <span className="text-purple-300 text-sm ml-1">Admin</span>
                    </motion.h1>
                )}
            </div>

            <div className="flex-1 space-y-2">
                {menuItems.map((item) => {
                    const Icon = item.icon
                    return (
                        <motion.button
                            key={item.id}
                            onClick={() => setActiveTab(item.id)}
                            className={`w-full flex items-center ${collapsed ? "justify-center" : "justify-start gap-3"} p-3 rounded-lg transition-colors ${
                                activeTab === item.id
                                    ? isDark
                                        ? "bg-pink-700 text-white"
                                        : "bg-pink-600 text-white"
                                    : isDark
                                        ? "text-white/70 hover:bg-gray-800"
                                        : "text-white/70 hover:bg-purple-800"
                            }`}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            title={collapsed ? item.label : ""}
                        >
                            <Icon className="w-5 h-5" />
                            {!collapsed && <span>{item.label}</span>}
                        </motion.button>
                    )
                })}
            </div>

            <div
                className={`mt-auto pt-4 border-t border-white/10 flex flex-col ${collapsed ? "items-center" : "items-start"} gap-3`}
            >
                {!collapsed && (
                    <div className="flex items-center justify-between w-full">
                        <span className="text-white/70 text-sm">DEMO MODE</span>
                        <ThemeToggle theme={theme} setTheme={setTheme} />
                    </div>
                )}

                <motion.button
                    onClick={handleLogout}
                    className={`flex items-center ${collapsed ? "justify-center w-10 h-10" : "justify-start gap-3 w-full"} p-3 text-white/70 ${
                        isDark ? "hover:bg-gray-800" : "hover:bg-purple-800"
                    } hover:text-white rounded-lg transition-colors`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    title={collapsed ? "Logout" : ""}
                >
                    <LogOut className="w-5 h-5" />
                    {!collapsed && <span>Logout</span>}
                </motion.button>
            </div>
        </motion.div>
    )
}

// User Management Component
function UserManagement({ theme }) {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const [searchTerm, setSearchTerm] = useState("")
    const [error, setError] = useState("")
    const isDark = theme === "dark"

    useEffect(() => {
        // Simulate API call with random data
        setTimeout(() => {
            setUsers(generateRandomUsers(15))
            setLoading(false)
        }, 1000)
    }, [])

    const filteredUsers = users.filter(
        (user) =>
            user.secret_id?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.first_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.last_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.phone?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            (user.status ? "active" : "inactive").includes(searchTerm.toLowerCase()),
    )

    return (
        <motion.div
            className={`p-6 h-screen w-full overflow-auto ${isDark ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-900"}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
        >
            <div className="flex justify-between items-center mb-6">
                <h2 className={`text-2xl font-bold ${isDark ? "text-white" : "text-purple-900"}`}>User Management</h2>
                <div className="flex gap-3">
                    <div className="relative">
                        <Search
                            className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${isDark ? "text-gray-400" : "text-gray-500"} w-4 h-4`}
                        />
                        <input
                            type="text"
                            placeholder="Search users..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className={`pl-10 pr-4 py-2 rounded-lg ${
                                isDark
                                    ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                                    : "border border-gray-300 text-gray-900 focus:ring-2 focus:ring-purple-500"
                            } focus:outline-none`}
                        />
                    </div>
                    <motion.button
                        onClick={() => {
                            setLoading(true)
                            setTimeout(() => {
                                setUsers(generateRandomUsers(15))
                                setLoading(false)
                            }, 1000)
                        }}
                        className={`p-2 ${
                            isDark
                                ? "bg-gray-700 text-purple-400 hover:bg-gray-600"
                                : "bg-purple-100 text-purple-700 hover:bg-purple-200"
                        } rounded-lg`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <RefreshCw className="w-5 h-5" />
                    </motion.button>
                </div>
            </div>

            {error && (
                <div className={`p-3 mb-4 ${isDark ? "bg-red-900/50 text-red-200" : "bg-red-100 text-red-800"} rounded-md`}>
                    {error}
                </div>
            )}

            {loading ? (
                <div className="flex justify-center items-center h-64">
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1, ease: "linear" }}
                    >
                        <RefreshCw className={`w-8 h-8 ${isDark ? "text-purple-400" : "text-purple-600"}`} />
                    </motion.div>
                </div>
            ) : (
                <div className={`${isDark ? "bg-gray-700" : "bg-white"} rounded-xl shadow-md overflow-hidden`}>
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className={isDark ? "bg-gray-800" : "bg-purple-50"}>
                        <tr>
                            <th
                                className={`px-6 py-3 text-left text-xs font-medium ${isDark ? "text-gray-300" : "text-purple-800"} uppercase tracking-wider`}
                            >
                                Secret Code
                            </th>
                            <th
                                className={`px-6 py-3 text-left text-xs font-medium ${isDark ? "text-gray-300" : "text-purple-800"} uppercase tracking-wider`}
                            >
                                First Name
                            </th>
                            <th
                                className={`px-6 py-3 text-left text-xs font-medium ${isDark ? "text-gray-300" : "text-purple-800"} uppercase tracking-wider`}
                            >
                                Last Name
                            </th>
                            <th
                                className={`px-6 py-3 text-left text-xs font-medium ${isDark ? "text-gray-300" : "text-purple-800"} uppercase tracking-wider`}
                            >
                                Email
                            </th>
                            <th
                                className={`px-6 py-3 text-left text-xs font-medium ${isDark ? "text-gray-300" : "text-purple-800"} uppercase tracking-wider`}
                            >
                                Phone
                            </th>
                            <th
                                className={`px-6 py-3 text-left text-xs font-medium ${isDark ? "text-gray-300" : "text-purple-800"} uppercase tracking-wider`}
                            >
                                Status
                            </th>
                        </tr>
                        </thead>
                        <tbody className={`${isDark ? "bg-gray-700 divide-gray-600" : "bg-white divide-gray-200"}`}>
                        {filteredUsers.length > 0 ? (
                            filteredUsers.map((user, index) => (
                                <motion.tr
                                    key={user.secret_id || index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    whileHover={{ backgroundColor: isDark ? "#374151" : "#f9f5ff" }}
                                >
                                    <td className={`px-6 py-4 whitespace-nowrap text-sm ${isDark ? "text-gray-200" : "text-gray-900"}`}>
                                        {user.secret_id}
                                    </td>
                                    <td className={`px-6 py-4 whitespace-nowrap text-sm ${isDark ? "text-gray-200" : "text-gray-900"}`}>
                                        {user.first_name || "N/A"}
                                    </td>
                                    <td className={`px-6 py-4 whitespace-nowrap text-sm ${isDark ? "text-gray-200" : "text-gray-900"}`}>
                                        {user.last_name || "N/A"}
                                    </td>
                                    <td className={`px-6 py-4 whitespace-nowrap text-sm ${isDark ? "text-gray-200" : "text-gray-900"}`}>
                                        {user.email}
                                    </td>
                                    <td className={`px-6 py-4 whitespace-nowrap text-sm ${isDark ? "text-gray-200" : "text-gray-900"}`}>
                                        {user.phone || "N/A"}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              user.status
                                  ? isDark
                                      ? "bg-green-900 text-green-300"
                                      : "bg-green-100 text-green-800"
                                  : isDark
                                      ? "bg-yellow-900 text-yellow-300"
                                      : "bg-yellow-100 text-yellow-800"
                          }`}
                      >
                        {user.status ? "Voted" : "Not Voted"}
                      </span>
                                    </td>
                                </motion.tr>
                            ))
                        ) : (
                            <tr>
                                <td
                                    colSpan="6"
                                    className={`px-6 py-4 text-center text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}
                                >
                                    No users found
                                </td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
            )}

            <motion.div
                className="mt-6 text-center text-yellow-300/70 text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
            >
                <p>DEMO MODE - No API calls are being made</p>
            </motion.div>
        </motion.div>
    )
}

// Replace the AddUser component with this version that auto-generates the secret code
function AddUser({ theme }) {
    const [formData, setFormData] = useState({
        secretcode: "SC" + (Math.floor(Math.random() * 900) + 100),
        Fname: "",
        Lname: "",
        email: "",
        phone: "",
    })
    const [loading, setLoading] = useState(false)
    const [loadingSecretCode, setLoadingSecretCode] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState("")
    const isDark = theme === "dark"

    const handleChange = (field) => (e) => {
        if (field !== "secretcode") {
            // Prevent changing the secret code
            setFormData((prev) => ({
                ...prev,
                [field]: e.target.value,
            }))
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setSuccess(false)
        setError("")

        // Simulate API call
        setTimeout(() => {
            setSuccess(true)
            setFormData({
                secretcode: "SC" + (Math.floor(Math.random() * 900) + 100),
                Fname: "",
                Lname: "",
                email: "",
                phone: "",
            })
            setLoading(false)
            setTimeout(() => setSuccess(false), 3000)
        }, 1000)
    }

    return (
        <motion.div
            className={`p-6 h-screen w-full overflow-auto ${isDark ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-900"}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
        >
            <motion.div
                className="flex justify-between items-center mb-6"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className={`text-2xl font-bold ${isDark ? "text-white" : "text-purple-900"}`}>Add User</h2>
            </motion.div>

            <motion.div
                className={`${isDark ? "bg-gray-700" : "bg-white"} rounded-xl shadow-md p-6 max-w-2xl mx-auto`}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <motion.div
                            className="space-y-2"
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <label className={`block text-sm font-medium ${isDark ? "text-gray-200" : "text-gray-700"}`}>
                                Secret Code (Auto-generated)
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    value={loadingSecretCode ? "Generating..." : formData.secretcode}
                                    className={`w-full px-3 py-2 rounded-md ${
                                        isDark ? "bg-gray-600 border-gray-500 text-white" : "border border-gray-300 text-gray-900"
                                    } focus:outline-none focus:ring-2 focus:ring-purple-500 cursor-not-allowed opacity-75`}
                                    disabled={true}
                                />
                                {loadingSecretCode && (
                                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                                        <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1, ease: "linear" }}
                                        >
                                            <RefreshCw className="w-4 h-4 text-gray-400" />
                                        </motion.div>
                                    </div>
                                )}
                            </div>
                        </motion.div>

                        <motion.div
                            className="space-y-2"
                            initial={{ x: 20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <label className={`block text-sm font-medium ${isDark ? "text-gray-200" : "text-gray-700"}`}>
                                First Name
                            </label>
                            <input
                                type="text"
                                value={formData.Fname}
                                onChange={handleChange("Fname")}
                                className={`w-full px-3 py-2 rounded-md ${
                                    isDark ? "bg-gray-600 border-gray-500 text-white" : "border border-gray-300 text-gray-900"
                                } focus:outline-none focus:ring-2 focus:ring-purple-500`}
                                required
                            />
                        </motion.div>

                        <motion.div
                            className="space-y-2"
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                        >
                            <label className={`block text-sm font-medium ${isDark ? "text-gray-200" : "text-gray-700"}`}>
                                Last Name
                            </label>
                            <input
                                type="text"
                                value={formData.Lname}
                                onChange={handleChange("Lname")}
                                className={`w-full px-3 py-2 rounded-md ${
                                    isDark ? "bg-gray-600 border-gray-500 text-white" : "border border-gray-300 text-gray-900"
                                } focus:outline-none focus:ring-2 focus:ring-purple-500`}
                                required
                            />
                        </motion.div>

                        <motion.div
                            className="space-y-2"
                            initial={{ x: 20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                        >
                            <label className={`block text-sm font-medium ${isDark ? "text-gray-200" : "text-gray-700"}`}>Email</label>
                            <input
                                type="email"
                                value={formData.email}
                                onChange={handleChange("email")}
                                className={`w-full px-3 py-2 rounded-md ${
                                    isDark ? "bg-gray-600 border-gray-500 text-white" : "border border-gray-300 text-gray-900"
                                } focus:outline-none focus:ring-2 focus:ring-purple-500`}
                                required
                            />
                        </motion.div>

                        <motion.div
                            className="space-y-2 md:col-span-2"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.7 }}
                        >
                            <label className={`block text-sm font-medium ${isDark ? "text-gray-200" : "text-gray-700"}`}>Phone</label>
                            <input
                                type="text"
                                value={formData.phone}
                                onChange={handleChange("phone")}
                                className={`w-full px-3 py-2 rounded-md ${
                                    isDark ? "bg-gray-600 border-gray-500 text-white" : "border border-gray-300 text-gray-900"
                                } focus:outline-none focus:ring-2 focus:ring-purple-500`}
                                required
                            />
                        </motion.div>
                    </div>

                    {error && (
                        <motion.div
                            className={`p-3 ${isDark ? "bg-red-900/50 text-red-200" : "bg-red-100 text-red-800"} rounded-md`}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            {error}
                        </motion.div>
                    )}

                    <motion.div
                        className="flex items-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                    >
                        <motion.button
                            type="submit"
                            className={`px-6 py-2 ${
                                isDark ? "bg-pink-700 hover:bg-pink-600" : "bg-purple-600 hover:bg-purple-700"
                            } text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 disabled:opacity-50`}
                            disabled={loading || loadingSecretCode}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {loading ? (
                                <div className="flex items-center">
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1, ease: "linear" }}
                                        className="mr-2"
                                    >
                                        <RefreshCw className="w-4 h-4" />
                                    </motion.div>
                                    Adding User...
                                </div>
                            ) : (
                                <div className="flex items-center">
                                    <UserPlus className="w-4 h-4 mr-2" />
                                    Add User
                                </div>
                            )}
                        </motion.button>

                        <AnimatePresence>
                            {success && (
                                <motion.span
                                    className={`ml-4 ${isDark ? "text-green-400" : "text-green-600"} flex items-center`}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0 }}
                                >
                                    <CheckCircle className="w-5 h-5 mr-2" /> User added successfully!
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </form>
            </motion.div>

            <motion.div
                className="mt-6 text-center text-yellow-300/70 text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
            >
                <p>DEMO MODE - No API calls are being made</p>
            </motion.div>
        </motion.div>
    )
}

// Replace the ViewResults component with this improved version
function ViewResults({ theme }) {
    const [results, setResults] = useState({})
    const [loading, setLoading] = useState(false)
    const [sendingEmail, setSendingEmail] = useState(false)
    const [emailSuccess, setEmailSuccess] = useState(false)
    const [emailError, setEmailError] = useState("")
    const [passphrase, setPassphrase] = useState("")
    const [error, setError] = useState("")
    const [showResults, setShowResults] = useState(false)
    const isDark = theme === "dark"

    const fetchResults = async () => {
        if (!passphrase) {
            setError("Please enter a passphrase to view results")
            return
        }

        setLoading(true)
        setError("")
        setEmailError("")

        // Simulate API call with random data
        setTimeout(() => {
            setResults(generateRandomElectionResults())
            setShowResults(true)
            setLoading(false)
        }, 1000)
    }

    // Send election results email to all users
    const sendAllEmails = async () => {
        if (!passphrase) {
            setEmailError("Please enter a passphrase to send emails")
            return
        }

        setSendingEmail(true)
        setEmailSuccess(false)
        setEmailError("")

        // Simulate API call
        setTimeout(() => {
            setEmailSuccess(true)
            setSendingEmail(false)
            setTimeout(() => setEmailSuccess(false), 3000)
        }, 1500)
    }

    // Format results for display
    const formatResults = () => {
        if (!results) return []

        return Object.entries(results).map(([name, votes]) => ({
            name,
            votes,
        }))
    }

    const formattedResults = formatResults()

    return (
        <motion.div
            className={`p-6 h-screen w-full overflow-auto ${isDark ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-900"}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
        >
            {/* Header & Passphrase Input */}
            <motion.div
                className="mb-8"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className={`text-2xl font-bold ${isDark ? "text-white" : "text-purple-900"} mb-6 text-center`}>
                    Election Results
                </h2>

                <div className={`${isDark ? "bg-gray-700" : "bg-white"} rounded-xl shadow-md p-6 max-w-2xl mx-auto`}>
                    <div className="space-y-4">
                        <p className={`${isDark ? "text-gray-300" : "text-gray-600"}`}>
                            Enter the passphrase to view election results and send email notifications. (Demo Mode- Enter any value!)
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3">
                            <div className="relative flex-grow">
                                <input
                                    type="text"
                                    placeholder="Enter passphrase"
                                    value={passphrase}
                                    onChange={(e) => setPassphrase(e.target.value)}
                                    className={`w-full px-4 py-3 rounded-lg ${
                                        isDark
                                            ? "bg-gray-800 border-gray-600 text-white placeholder-gray-400"
                                            : "border border-gray-300 text-gray-900 focus:ring-2 focus:ring-purple-500"
                                    } focus:outline-none`}
                                    onKeyPress={(e) => e.key === "Enter" && fetchResults()}
                                />
                                {loading && (
                                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                                        <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1, ease: "linear" }}
                                        >
                                            <RefreshCw className="w-4 h-4 text-gray-400" />
                                        </motion.div>
                                    </div>
                                )}
                            </div>

                            <motion.button
                                onClick={fetchResults}
                                className={`px-6 py-3 ${
                                    isDark ? "bg-pink-700 hover:bg-pink-600" : "bg-purple-600 hover:bg-purple-700"
                                } text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 disabled:opacity-50 flex items-center justify-center gap-2 whitespace-nowrap`}
                                disabled={loading || !passphrase}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                View Results
                            </motion.button>
                        </div>

                        {error && (
                            <motion.div
                                className={`p-3 ${isDark ? "bg-red-900/50 text-red-200" : "bg-red-100 text-red-800"} rounded-md flex items-start gap-2`}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                                <p>{error}</p>
                            </motion.div>
                        )}
                    </div>
                </div>
            </motion.div>

            {/* Results Display */}
            <AnimatePresence>
                {showResults && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-6"
                    >
                        <div className={`${isDark ? "bg-gray-700" : "bg-white"} rounded-xl shadow-md p-6`}>
                            <div className="flex justify-between items-center mb-6">
                                <h3 className={`text-xl font-bold ${isDark ? "text-white" : "text-purple-900"}`}>Election Results</h3>

                                <motion.button
                                    onClick={sendAllEmails}
                                    disabled={sendingEmail || Object.keys(results).length === 0}
                                    className={`px-4 py-2 ${
                                        isDark ? "bg-pink-700 hover:bg-pink-600" : "bg-purple-600 hover:bg-purple-700"
                                    } text-white rounded-lg disabled:opacity-50 flex items-center gap-2`}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {sendingEmail ? (
                                        <>
                                            <motion.div
                                                animate={{ rotate: 360 }}
                                                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1, ease: "linear" }}
                                            >
                                                <RefreshCw className="w-4 h-4" />
                                            </motion.div>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-4 h-4" />
                                            Send Results Email
                                        </>
                                    )}
                                </motion.button>
                            </div>

                            {emailError && (
                                <motion.div
                                    className={`p-3 mb-4 ${isDark ? "bg-red-900/50 text-red-200" : "bg-red-100 text-red-800"} rounded-md flex items-start gap-2`}
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                >
                                    <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                                    <p>{emailError}</p>
                                </motion.div>
                            )}

                            <AnimatePresence>
                                {emailSuccess && (
                                    <motion.div
                                        className={`p-3 mb-4 ${isDark ? "bg-green-900/50 text-green-200" : "bg-green-100 text-green-800"} rounded-md flex items-center`}
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0 }}
                                    >
                                        <CheckCircle className="w-5 h-5 mr-2" />
                                        Results emails sent successfully!
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {formattedResults.map((result, index) => (
                                    <motion.div
                                        key={index}
                                        className={`p-6 ${isDark ? "bg-gray-800" : "bg-purple-50"} rounded-xl shadow-md`}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                                    >
                                        <h3 className={`text-lg font-semibold ${isDark ? "text-white" : "text-purple-900"} mb-2`}>
                                            {result.name}
                                        </h3>
                                        <div className="flex items-end gap-2">
                                            <div className="text-3xl font-bold text-pink-500">{result.votes}</div>
                                            <div className={`${isDark ? "text-gray-400" : "text-gray-600"}`}>votes</div>
                                        </div>

                                        <div className="mt-4 w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                            <motion.div
                                                className="bg-pink-600 h-2.5 rounded-full"
                                                initial={{ width: 0 }}
                                                animate={{
                                                    width: `${(result.votes / Math.max(...formattedResults.map((r) => r.votes))) * 100}%`,
                                                }}
                                                transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                                            />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {!showResults && !loading && (
                <motion.div
                    className={`p-8 ${isDark ? "bg-gray-700" : "bg-white"} rounded-xl shadow-md text-center max-w-2xl mx-auto`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <BarChart2 className={`w-16 h-16 ${isDark ? "text-pink-400" : "text-purple-500"} mx-auto mb-4 opacity-50`} />
                    <h3 className={`text-xl font-semibold ${isDark ? "text-white" : "text-gray-800"} mb-2`}>
                        Enter Passphrase to View Results
                    </h3>
                    <p className={isDark ? "text-gray-300" : "text-gray-600"}>
                        Enter the election passphrase above to view the results and send email notifications.
                    </p>
                </motion.div>
            )}

            <motion.div
                className="mt-6 text-center text-yellow-300/70 text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
            >
                <p>DEMO MODE - No API calls are being made</p>
            </motion.div>
        </motion.div>
    )
}

// Delete Data Component
function DeleteData({ theme }) {
    const [showConfirmation, setShowConfirmation] = useState(false)
    const [deleteType, setDeleteType] = useState("")
    const [secretCode, setSecretCode] = useState("")
    const [confirmText, setConfirmText] = useState("")
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState("")
    const isDark = theme === "dark"

    const handleDelete = async () => {
        if (!deleteType) {
            setError("Please select what to delete")
            return
        }

        if (deleteType === "specific" && !secretCode) {
            setError("Please enter a secret code")
            return
        }

        setShowConfirmation(true)
    }

    const confirmDelete = async () => {
        if (deleteType === "all" && confirmText !== "confirm") {
            setError("Please type 'confirm' to proceed with deletion")
            return
        }

        setLoading(true)
        setError("")
        setSuccess(false)

        // Simulate API call
        setTimeout(() => {
            setSuccess(true)
            setShowConfirmation(false)
            setSecretCode("")
            setConfirmText("")
            setLoading(false)
            setTimeout(() => setSuccess(false), 3000)
        }, 1500)
    }

    return (
        <motion.div
            className={`p-6 h-screen w-full overflow-auto ${isDark ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-900"}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
        >
            <h2 className={`text-2xl font-bold ${isDark ? "text-white" : "text-purple-900"} mb-6 text-center`}>
                Delete Data
            </h2>

            <div className={`${isDark ? "bg-gray-700" : "bg-white"} rounded-xl shadow-md p-6 max-w-2xl mx-auto`}>
                <div className="space-y-6">
                    <div>
                        <h3 className={`text-lg font-medium ${isDark ? "text-white" : "text-gray-900"} mb-3`}>
                            Select Delete Operation
                        </h3>
                        <div className="space-y-3">
                            <label className="flex items-center space-x-3">
                                <input
                                    type="radio"
                                    name="deleteType"
                                    value="all"
                                    checked={deleteType === "all"}
                                    onChange={() => setDeleteType("all")}
                                    className={`h-4 w-4 ${isDark ? "text-pink-600" : "text-purple-600"} focus:ring-purple-500`}
                                />
                                <span className={isDark ? "text-gray-200" : "text-gray-700"}>Delete All Data</span>
                            </label>
                            <label className="flex items-center space-x-3">
                                <input
                                    type="radio"
                                    name="deleteType"
                                    value="specific"
                                    checked={deleteType === "specific"}
                                    onChange={() => setDeleteType("specific")}
                                    className={`h-4 w-4 ${isDark ? "text-pink-600" : "text-purple-600"} focus:ring-purple-500`}
                                />
                                <span className={isDark ? "text-gray-200" : "text-gray-700"}>Delete by Secret Code</span>
                            </label>
                        </div>
                    </div>

                    {deleteType === "specific" && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="space-y-2"
                        >
                            <label className={`block text-sm font-medium ${isDark ? "text-gray-200" : "text-gray-700"}`}>
                                Secret Code
                            </label>
                            <input
                                type="text"
                                value={secretCode}
                                onChange={(e) => setSecretCode(e.target.value)}
                                className={`w-full px-3 py-2 rounded-md ${
                                    isDark ? "bg-gray-600 border-gray-500 text-white" : "border border-gray-300 text-gray-900"
                                } focus:outline-none focus:ring-2 focus:ring-purple-500`}
                                required
                            />
                        </motion.div>
                    )}

                    {error && (
                        <div className={`p-3 ${isDark ? "bg-red-900/50 text-red-200" : "bg-red-100 text-red-800"} rounded-md`}>
                            {error}
                        </div>
                    )}

                    <div className="pt-4 flex justify-center">
                        <motion.button
                            onClick={handleDelete}
                            className={`px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:opacity-50`}
                            disabled={loading || !deleteType || (deleteType === "specific" && !secretCode)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Delete Data
                        </motion.button>

                        <AnimatePresence>
                            {success && (
                                <motion.p
                                    className={`mt-2 text-sm ${isDark ? "text-green-400" : "text-green-600"} flex items-center`}
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                >
                                    <CheckCircle className="w-4 h-4 mr-2" /> Data deleted successfully!
                                </motion.p>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {showConfirmation && (
                    <motion.div
                        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className={`${isDark ? "bg-gray-800" : "bg-white"} rounded-xl p-6 max-w-md w-full mx-4`}
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                        >
                            <div className="flex items-center text-red-600 mb-4">
                                <AlertTriangle className="w-6 h-6 mr-2" />
                                <h3 className="text-lg font-bold">Confirm Deletion</h3>
                            </div>

                            <p className={isDark ? "text-gray-300" : "text-gray-700"}>
                                {deleteType === "all"
                                    ? "Are you sure you want to delete ALL data? This action cannot be undone."
                                    : `Are you sure you want to delete data for secret code "${secretCode}"? This action cannot be undone.`}
                            </p>

                            {deleteType === "all" && (
                                <div className="mt-4">
                                    <label className={`block text-sm font-medium ${isDark ? "text-gray-200" : "text-gray-700"} mb-2`}>
                                        Type "confirm" to proceed
                                    </label>
                                    <input
                                        type="text"
                                        value={confirmText}
                                        onChange={(e) => setConfirmText(e.target.value)}
                                        className={`w-full px-3 py-2 rounded-md ${
                                            isDark ? "bg-gray-600 border-gray-500 text-white" : "border border-gray-300 text-gray-900"
                                        } focus:outline-none focus:ring-2 focus:ring-red-500`}
                                    />
                                </div>
                            )}

                            <div className="flex justify-end space-x-3 mt-6">
                                <motion.button
                                    onClick={() => setShowConfirmation(false)}
                                    className={`px-4 py-2 ${
                                        isDark
                                            ? "border border-gray-600 text-gray-300 hover:bg-gray-700"
                                            : "border border-gray-300 text-gray-700 hover:bg-gray-50"
                                    } rounded-md`}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Cancel
                                </motion.button>

                                <motion.button
                                    onClick={confirmDelete}
                                    className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                                    disabled={loading || (deleteType === "all" && confirmText !== "confirm")}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {loading ? "Deleting..." : "Yes, Delete"}
                                </motion.button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.div
                className="mt-6 text-center text-yellow-300/70 text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
            >
                <p>DEMO MODE - No API calls are being made</p>
            </motion.div>
        </motion.div>
    )
}

// Create Elections Component
function CreateElections({ theme }) {
    const [electionConfig, setElectionConfig] = useState({
        elecname: "",
        date: new Date().toISOString().split("T")[0],
        passphrase: "",
    })
    const [candidates, setCandidates] = useState([
        { name: "Rahul VS", party: "United People's Front", details: "A" },
        { name: "Saipranav M", party: "Harmony Alliance", details: "B" },
        { name: "Amitabh Singh", party: "Future Vision Party", details: "C" },
        { name: "Neha Iyer", party: "Integrity League", details: "D" },
        { name: "Kabir Das", party: "New Horizon Movement", details: "E" }
    ])
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState("")
    const isDark = theme === "dark"

    const handleChange = (field) => (e) => {
        setElectionConfig((prev) => ({
            ...prev,
            [field]: e.target.value,
        }))
    }

    const handleCandidateChange = (index, field) => (e) => {
        const newCandidates = [...candidates]
        newCandidates[index][field] = e.target.value
        setCandidates(newCandidates)
    }

    const addCandidate = () => {
        setCandidates([...candidates, { name: "", party: "", details: "" }])
    }

    const removeCandidate = (index) => {
        if (candidates.length > 1) {
            const newCandidates = [...candidates]
            newCandidates.splice(index, 1)
            setCandidates(newCandidates)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setSuccess(false)
        setError("")

        // Simulate API call
        setTimeout(() => {
            setSuccess(true)
            setLoading(false)
            setTimeout(() => setSuccess(false), 3000)
        }, 1500)
    }

    return (
        <motion.div
            className={`p-6 h-screen w-full overflow-auto ${isDark ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-900"}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
        >
            <h2 className={`text-2xl font-bold ${isDark ? "text-white" : "text-purple-900"} mb-6`}>Create Election</h2>

            <form
                onSubmit={handleSubmit}
                className={`${isDark ? "bg-gray-700" : "bg-white"} rounded-xl shadow-md p-6 max-w-4xl mx-auto`}
            >
                <div className="space-y-6">
                    <div className="space-y-2">
                        <label className={`block text-sm font-medium ${isDark ? "text-gray-200" : "text-gray-700"}`}>
                            Election Name
                        </label>
                        <input
                            type="text"
                            value={electionConfig.elecname}
                            onChange={handleChange("elecname")}
                            className={`w-full px-3 py-2 rounded-md ${
                                isDark ? "bg-gray-600 border-gray-500 text-white" : "border border-gray-300 text-gray-900"
                            } focus:outline-none focus:ring-2 focus:ring-purple-500`}
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <label className={`block text-sm font-medium ${isDark ? "text-gray-200" : "text-gray-700"}`}>
                            Election Date
                        </label>
                        <input
                            type="date"
                            value={electionConfig.date}
                            onChange={handleChange("date")}
                            className={`w-full px-3 py-2 rounded-md ${
                                isDark ? "bg-gray-600 border-gray-500 text-white" : "border border-gray-300 text-gray-900"
                            } focus:outline-none focus:ring-2 focus:ring-purple-500`}
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <label className={`block text-sm font-medium ${isDark ? "text-gray-200" : "text-gray-700"}`}>
                            Passphrase (Warning: Passphrase is required to view results. It can not be reset under any circumstance.)
                        </label>
                        <input
                            type="text"
                            value={electionConfig.passphrase}
                            onChange={handleChange("passphrase")}
                            className={`w-full px-3 py-2 rounded-md ${
                                isDark ? "bg-gray-600 border-gray-500 text-white" : "border border-gray-300 text-gray-900"
                            } focus:outline-none focus:ring-2 focus:ring-purple-500`}
                            required
                        />
                    </div>

                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <h3 className={`text-lg font-medium ${isDark ? "text-white" : "text-gray-900"}`}>Candidates</h3>
                            <motion.button
                                type="button"
                                onClick={addCandidate}
                                className={`px-3 py-1 ${
                                    isDark ? "bg-pink-700 hover:bg-pink-600" : "bg-purple-100 text-purple-700 hover:bg-purple-200"
                                } rounded-md flex items-center gap-1`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Plus className="w-4 h-4" />
                                Add Candidate
                            </motion.button>
                        </div>

                        {candidates.map((candidate, index) => (
                            <motion.div
                                key={index}
                                className={`p-4 rounded-lg ${isDark ? "bg-gray-800" : "bg-purple-50"} grid grid-cols-1 md:grid-cols-3 gap-4 relative`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="space-y-2">
                                    <label className={`block text-sm font-medium ${isDark ? "text-gray-200" : "text-gray-700"}`}>
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        value={candidate.name}
                                        onChange={handleCandidateChange(index, "name")}
                                        className={`w-full px-3 py-2 rounded-md ${
                                            isDark ? "bg-gray-600 border-gray-500 text-white" : "border border-gray-300 text-gray-900"
                                        } focus:outline-none focus:ring-2 focus:ring-purple-500`}
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className={`block text-sm font-medium ${isDark ? "text-gray-200" : "text-gray-700"}`}>
                                        Party
                                    </label>
                                    <input
                                        type="text"
                                        value={candidate.party}
                                        onChange={handleCandidateChange(index, "party")}
                                        className={`w-full px-3 py-2 rounded-md ${
                                            isDark ? "bg-gray-600 border-gray-500 text-white" : "border border-gray-300 text-gray-900"
                                        } focus:outline-none focus:ring-2 focus:ring-purple-500`}
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className={`block text-sm font-medium ${isDark ? "text-gray-200" : "text-gray-700"}`}>
                                        Unique Code (Single Character)
                                    </label>
                                    <input
                                        type="text"
                                        value={candidate.details}
                                        onChange={handleCandidateChange(index, "details")}
                                        className={`w-full px-3 py-2 rounded-md ${
                                            isDark ? "bg-gray-600 border-gray-500 text-white" : "border border-gray-300 text-gray-900"
                                        } focus:outline-none focus:ring-2 focus:ring-purple-500`}
                                        required
                                    />
                                </div>
                                {candidates.length > 1 && (
                                    <button
                                        type="button"
                                        onClick={() => removeCandidate(index)}
                                        className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center"
                                        aria-label="Remove candidate"
                                    >
                                        ×
                                    </button>
                                )}
                            </motion.div>
                        ))}
                    </div>

                    {error && (
                        <div className={`p-3 ${isDark ? "bg-red-900/50 text-red-200" : "bg-red-100 text-red-800"} rounded-md`}>
                            {error}
                        </div>
                    )}

                    <div className="mt-6 flex items-center">
                        <motion.button
                            type="submit"
                            className={`px-6 py-2 ${
                                isDark ? "bg-pink-700 hover:bg-pink-600" : "bg-purple-600 hover:bg-purple-700"
                            } text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 disabled:opacity-50`}
                            disabled={loading}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {loading ? (
                                <div className="flex items-center">
                                    <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                                    Creating...
                                </div>
                            ) : (
                                <div className="flex items-center">
                                    <Calendar className="w-4 h-4 mr-2" />
                                    Create Election
                                </div>
                            )}
                        </motion.button>

                        <AnimatePresence>
                            {success && (
                                <motion.span
                                    className={`ml-4 ${isDark ? "text-green-400" : "text-green-600"} flex items-center`}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0 }}
                                >
                                    <CheckCircle className="w-5 h-5 mr-2" /> Election created successfully!
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </form>

            <motion.div
                className="mt-6 text-center text-yellow-300/70 text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
            >
                <p>DEMO MODE - No API calls are being made</p>
            </motion.div>
        </motion.div>
    )
}

// Update the main AdminDashboard component to use the new sidebar
export default function AdminDashboardStatic() {
    const [activeTab, setActiveTab] = useState("users")
    const [theme, setTheme] = useState("dark")

    // Add subtle page transition animations
    const pageVariants = {
        initial: { opacity: 0, x: -10 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: 10 },
    }

    useEffect(() => {
        // Check if we're in demo mode
        const demoMode = localStorage.getItem("demoMode")
        if (!demoMode) {
            window.location.href = "/login"
        }
    }, [])

    const renderTabContent = () => {
        switch (activeTab) {
            case "users":
                return (
                    <motion.div
                        key="users"
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        variants={pageVariants}
                        transition={{ duration: 0.3 }}
                    >
                        <UserManagement theme={theme} />
                    </motion.div>
                )
            case "add-user":
                return (
                    <motion.div
                        key="add-user"
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        variants={pageVariants}
                        transition={{ duration: 0.3 }}
                    >
                        <AddUser theme={theme} />
                    </motion.div>
                )
            case "elections":
                return (
                    <motion.div
                        key="elections"
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        variants={pageVariants}
                        transition={{ duration: 0.3 }}
                    >
                        <CreateElections theme={theme} />
                    </motion.div>
                )
            case "results":
                return (
                    <motion.div
                        key="results"
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        variants={pageVariants}
                        transition={{ duration: 0.3 }}
                    >
                        <ViewResults theme={theme} />
                    </motion.div>
                )
            case "login-toggle":
                return (
                    <motion.div
                        key="login-toggle"
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        variants={pageVariants}
                        transition={{ duration: 0.3 }}
                    >
                        <LoginToggleSection theme={theme} />
                    </motion.div>
                )
            case "delete":
                return (
                    <motion.div
                        key="delete"
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        variants={pageVariants}
                        transition={{ duration: 0.3 }}
                    >
                        <DeleteData theme={theme} />
                    </motion.div>
                )
            default:
                return (
                    <motion.div
                        key="users-default"
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        variants={pageVariants}
                        transition={{ duration: 0.3 }}
                    >
                        <UserManagement theme={theme} />
                    </motion.div>
                )
        }
    }

    return (
        <div className={`flex h-screen w-screen ${theme === "dark" ? "bg-gray-900" : "bg-gray-100"}`}>
            <AdminSidebar activeTab={activeTab} setActiveTab={setActiveTab} theme={theme} setTheme={setTheme} />
            <div className="flex-1 overflow-auto">
                <AnimatePresence mode="wait">{renderTabContent()}</AnimatePresence>
            </div>
        </div>
    )
}

