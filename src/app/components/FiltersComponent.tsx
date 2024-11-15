import React from "react";
import { useUserStore } from "../state/userStore";

const FiltersComponent: React.FC = () => {
    const { setFilters } = useUserStore();

    return (
        <div>
            <input
                type="text"
                placeholder="Name"
                onChange={(e) => setFilters({ name: e.target.value })}
            />
            <input
                type="number"
                placeholder="Limit"
                onChange={(e) => setFilters({ limit: parseInt(e.target.value) })}
            />
        </div>
    );
};

export default FiltersComponent;
