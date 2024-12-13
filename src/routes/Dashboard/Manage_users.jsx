import React from 'react'
import Head_section from '../../components/Head_section'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { TbFidgetSpinner } from "react-icons/tb";
import useAuth from '../../Hooks/useAuth';
import toast from 'react-hot-toast';

export default function Manage_users() {
    const { user } = useAuth();

    const { data: all_users, isLoading, refetch } = useQuery({
        queryKey: ['all_users'],
        queryFn: async () => {
            const { data } = await axios.get('https://kanjikids-server.vercel.app/all_users');
            return data
        }
    })

    const handleRoleUpdate = async (userId, newRole) => {
        try {
            await axios.patch(`https://kanjikids-server.vercel.app/update_role/${userId}`, { role: newRole });
            refetch();
            toast.success("Updating user role is successful!")
        } catch (error) {
            console.error(error);
            toast.error(error.message);
        }
    };

    return (
        <div className='font-poppins'>
            <Head_section heading={'User Management Dashboard'} subheading={'Efficiently oversee user accounts, roles, and permissions for a seamless platform experience.'} />
            <div>
                <div className='flex items-center justify-center'>
                    {isLoading ? <TbFidgetSpinner className='animate-spin' size={34} /> : ""}
                </div>
                {
                    !isLoading && <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border dark:bg-neutral-800 dark:border-neutral-700">
                            <thead className="bg-gray-200 dark:bg-neutral-700">
                                <tr>
                                    <th className="text-left px-4 py-2 text-sm font-semibold text-gray-700 dark:text-neutral-300">Name</th>
                                    <th className="text-left px-4 py-2 text-sm font-semibold text-gray-700 dark:text-neutral-300">Email</th>
                                    <th className="text-left px-4 py-2 text-sm font-semibold text-gray-700 dark:text-neutral-300">Role</th>
                                    <th className="text-left px-4 py-2 text-sm font-semibold text-gray-700 dark:text-neutral-300">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {all_users?.filter(u => u?.email !== user?.email)?.map((user, index) => (
                                    <tr key={user._id} className="border-t dark:border-neutral-600">
                                        <td className="px-4 py-3 text-sm text-gray-800 dark:text-neutral-200 flex items-center">
                                            <img
                                                src={user?.photoURL || 'https://via.placeholder.com/40'}
                                                alt="Profile"
                                                className="w-10 h-10 rounded-full mr-3"
                                            />
                                            <span>{user?.displayName || "N/A"}</span>
                                        </td>
                                        <td className="px-4 py-3 text-sm text-gray-800 dark:text-neutral-200">{user?.email}</td>
                                        <td className="px-4 py-3 text-sm text-gray-800 dark:text-neutral-200">{user?.role || "user"}</td>
                                        <td className="px-4 py-3 text-sm">
                                            <select
                                                defaultValue={user?.role}
                                                onChange={(e) => handleRoleUpdate(user._id, e.target.value)}
                                                className="p-2 border rounded bg-gray-50 dark:bg-neutral-800 dark:border-neutral-600"
                                            >
                                                <option value="user">User</option>
                                                <option value="admin">Admin</option>
                                            </select>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                }
            </div>
        </div>
    )
}
