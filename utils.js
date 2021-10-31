const addOneToString = (a) => {
    try {
        return (parseInt(a) + 1).toString()
    } catch (error) {
        return "0"
    }
}