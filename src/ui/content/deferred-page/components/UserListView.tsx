import { FC, memo, useDeferredValue, useEffect, useMemo, useState, useTransition } from "react";
import { Text } from "../../../components/Text";
import { filledArray, getSomeUser, UserDetails } from "../../../util"
import "./UserListView.css"

const USER_LIST = filledArray(10000, (i) => getSomeUser());

interface UserListViewProps {
    query: string;
    displayQuery?: string;
}

const UserListViewCMP: FC<UserListViewProps> = (props) => {
    const { query } = props;

    const [delayedQuery, setDelayedQuery] = useState(query);
    const [isPending, startTransition] = useTransition();
    
    useEffect(() => {
        startTransition(() => {
            setDelayedQuery(query);
        })
    }, [query]);

    const users = useMemo(() => {
        if (!delayedQuery) return null;
        return USER_LIST.filter(it => it.name.toLowerCase().includes(delayedQuery.toLowerCase())).map(it => (
            <UserCard user={it} key={it.email+it.name}/>
        ));
    }, [delayedQuery]);

    return (
        <div className="user-list-view">
            <Text size="large" className="user-list-view__label u-mb-md">
                {isPending ? "Loading" : "Found"} users for "{query}" {(isPending || !users) ? "" : `(${users?.length})`}
            </Text>
            <div className="user-list-view__container">
                {users}
            </div>
        </div>
    )
}

export const UserListView = memo(UserListViewCMP)

const UserListViewDefferedCMP: FC<UserListViewProps> = (props) => {
    const {query} = props;

    const dataQuery = useDeferredValue(query);
    const isLoading = dataQuery !== query;
    
    console.log(`QUERY=${query}, DISPLAY_QUERY=${dataQuery}, EQ=${query === dataQuery}`)

    const users = useMemo(() => {
        if (query === "") return null;
        return USER_LIST.filter(it => it.name.toLowerCase().includes(dataQuery.toLowerCase())).map(it => (
            <UserCard user={it} key={it.email+it.name}/>
        ));
    }, [dataQuery]);

    return (
        <div className="user-list-view">
            <Text size="large" className="user-list-view__label u-mb-md">
                {isLoading ? "Loading" : "Found"} users for "{query}" {(isLoading || !users) ? "" : `(${users?.length })`}
            </Text>
            <div className="user-list-view__container">
                {users}
            </div>
        </div>
    )
}

export const UserListViewDeffered = memo(UserListViewDefferedCMP);

const UserCard: FC<{user: UserDetails}> = (props) => {
    const { user } = props;

    return (
        <div className="user-card">
            <Text className="user-card__name" weight="bold">{user.name}</Text>
            <Text className="user-card__email u-mt-sm">{user.email}</Text>
            <Text className="user-card__age u-mt-sm">Age: {user.age}</Text>
        </div>
    )
}