let Data = {
    economic: {
        listForLister: [
            {id: 1, name: "Alexander", salary: 1000, status: false},
            {id: 1, name: "Solomon", salary: 1000, status: true},
            {id: 1, name: "Cesar", salary: 1000, status: false},
            {id: 1, name: "Evgeniy", salary: 1000, status: false},
        ],
    },
};

export default Data

export let FuncNewStatusListerCompFromData = () => {
    Data.economic.listForLister.status = !Data.economic.listForLister.status;
};

