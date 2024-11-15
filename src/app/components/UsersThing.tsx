import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../api/user";
import { useUserStore } from "../state/userStore";
import FiltersComponent from "./FiltersComponent";

const UsersThing: React.FC = () => {
    const { filters } = useUserStore();
    const { data } = useQuery({
        queryKey: ["users", filters],
        queryFn: () => getUsers(filters),
        meta: {
            errorMessage: "Failed to fetch users CUSTOMBRO",
        },
    });

    return (
        <main>
            <FiltersComponent />
            {data ? (
                data.length > 0 ? (
                    <ul>
                        {data.map((user) => (
                            <li key={user.id}>{user.name}</li>
                        ))}
                    </ul>
                ) : (
                    <p>No hay data bro 😢</p>
                )
            ) : (
                <p>Loading...</p>
            )}
        </main>
    );
};

export default UsersThing;
