const fetchItems = (setItem) => {
    useEffect(() => {
        const date = new Date();
        const today = date.getDate();
        const month = date.toLocaleDateString("en-US", { month: "short" });
        const year = date.getFullYear();

        const localStorageDate = localStorage.getItem("date");

        if (!localStorageDate) {
            localStorage.setItem("date", `${today} ${month} ${year}`);
        }

        if (localStorage.getItem("date") !== `${today} ${month} ${year}`) {
            localStorage.clear();
            localStorage.setItem("date", `${today} ${month} ${year}`);
            return;
        }

        const localStorageItems = JSON.parse(localStorage.getItem("items"));
        if (localStorageItems) {
            setItems(localStorageItems);
        }
    }, []);
};

export default fetchItems;
