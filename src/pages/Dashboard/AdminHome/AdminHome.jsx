import { useQueries } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiousSecure";


const AdminHome = () => {
    const { user } = useAuth();
    const [axiousSecure] = useAxiosSecure();

    const {data: stats = {}} = useQueries({
        queryKey : ['admin-stats'],
        queryFn : async () => {
            const res = await axiousSecure('/admin-stats');
            return res.data;
        }
    })

    return (
        <div className="w-full m-4">
            <h3 className="text-3xl ">Welcome back {user.displayName}</h3>
        </div>
    );
};

export default AdminHome;