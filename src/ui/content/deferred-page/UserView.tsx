import { FC, useMemo } from "react";
import { Text } from "../../components/Text/Text";
import { getSomeUser } from "../../util";

interface UserViewProps {
    query?: string;
}

export const UserView: FC<UserViewProps> = (props) => {
    const {query} = props;

    const user = useMemo(() => {
        return getSomeUser(query);
    }, [query])

    if (!query) return null;

    return (
        <div>
            <Text weight="bold">
                email: <Text inline weight="regular">{user.email}</Text>
            </Text> 
            <Text weight="bold">
                name: <Text inline weight="regular">{user.name}</Text>
            </Text>
            <Text weight="bold">
                age: <Text inline weight="regular">{user.age}</Text>
            </Text> 
        </div>
    )
}