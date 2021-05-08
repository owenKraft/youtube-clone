const Utilities = () => {

    function formatDate(utcDate){
        const initVideoDate = new Date(utcDate)
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return Intl.DateTimeFormat('en-US', options).format(initVideoDate)
    }

    function kFormatter(num) {
        return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
    }

    return {
        formatDate,
        kFormatter
    }
}

export default Utilities