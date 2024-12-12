import { useQuery } from '@tanstack/react-query'
import useAuth from './useAuth'
import axios from 'axios'

export default function useRole() {
    const { user } = useAuth()
    
    const {data : logged_in_user, isPending} = useQuery({
        queryKey : ['role', user?.email],
        queryFn : async() => {
            const {data} = await axios.get(`http://localhost:8000/my_data/${user?.email}`);
            return data
        }
    })
    const role = logged_in_user?.role;
    return {role, isPending}
}
