export default {
direct: `//UserListView.tsx
const UserListView: FC<UserListViewProps> = (props) => {
    const { query } = props;

    const [delayedQuery, setDelayedQuery] = useState(query);
    const [isPending, startTransition] = useTransition();
    
    // One more useEffect
    useEffect(() => {
        startTransition(() => {
            setDelayedQuery(query);
        })
    }, [query]);

    const users = useMemo(() => {
        if (delayedQuery === "") return null;
        /* Filter users by #delayedQuery# */;
    }, [delayedQuery]);

    return (
        <div className="user-list">
            <Text size="large">
                {isPending ? "Loading" : "Found"}
            </Text>
            <div className="list-container">
                {users}
            </div>
        </div>
    )
}`,
simple: ` // UserListViewDeffered.tsx
const UserListViewDeffered: FC<UserListViewProps> = (props) => {
    const {query} = props;

    const delayedQuery = useDeferredValue(query);
    const isPending = dataQuery !== query;

    const users = useMemo(() => {
        if (dataQuery === "") return null;
        /* Filter users by #delayedQuery# */;
    }, [dataQuery]);

    return (
        <div className="user-list">
            <Text size="large">
                {isPending ? "Loading" : "Found"}
            </Text>
            <div className="list-container">
                {users}
            </div>
        </div>
    )
}`
}