<script>
    import moment from 'moment';
    moment.suppressDeprecationWarnings = true;  // stops console from reading moment depractaion warning
    let date = moment().format('ddd, D MMM YYYY');  // starts at todays date

    const DEMO_EVENTS = [
        { value: 100, time: moment() },
        { value: 155, time: moment() },
        { value: 83, time: moment() },
        { value: 211, time: moment().subtract(1, 'day') },
        { value: 138, time: moment().subtract(1, 'day') },
        { value: 55, time: moment().subtract(1, 'day') },
        { value: 183, time: moment().subtract(2, 'day') },
        { value: 103, time: moment().subtract(2, 'day') },
        { value: 98, time: moment().subtract(3, 'day') }
    ];
    
    // function takes in events and date
    const getBloodSugarValuesFromEventsByDay = (events, date) => {
        // filters DEMO_EVENTS by date
        const filteredEventsByDay = events.filter(event => event.time.format('ddd, D MMM YYYY') === date);
        // getting daily average
        let sum = 0;
        for(let i = 0; i < filteredEventsByDay.length; i++) {
            sum += filteredEventsByDay[i].value;
        } if(sum <= 0) {
            sum = '';
        }
        // getting percentage of events between 70 and 180
        let counter = 0;
        for(let i = 0; i < filteredEventsByDay.length; i++) {
            if (filteredEventsByDay[i].value >= 70 && filteredEventsByDay[i].value <= 180 ) {
                counter++;
            }
        }
        // if statement in case there are days with no events
        const dailyAverage = sum / filteredEventsByDay.length;
        if( filteredEventsByDay.length <= 0) {
            return {
                totalEvents: '',
                average: '',
                percentageBetweenRange: ''
            }
        } else {
            // if there are events
            return {
                totalEvents: filteredEventsByDay.length,
                average: dailyAverage,
                percentageBetweenRange: counter / filteredEventsByDay.length * 100
            }
        }
    }
    getBloodSugarValuesFromEventsByDay(DEMO_EVENTS, date);
 

    const togglePreviousDay = () => {
        const previousDay = moment(date).subtract(1, 'day').format('ddd, D MMM YYYY');
        date = previousDay;
        getBloodSugarValuesFromEventsByDay(DEMO_EVENTS, date);
    }

    const toggleNextDay = () => {
        const nextDay = moment(date).add(1, 'day').format('ddd, D MMM YYYY');
        date = nextDay;
        getBloodSugarValuesFromEventsByDay(DEMO_EVENTS, date);
    }

</script>

<div class="dashboard-container">
    <div class="dashboard-header">
        <div class="dashboard-date">
            <h1>{date}</h1>
        </div>
        <div class="dashboard-arrows">
            <button on:click={togglePreviousDay}>
                Back
            </button>
            <button on:click={toggleNextDay}>
                Forward
            </button>
        </div>    
    </div>
    <div class="dashboard-inner">
        <div class="dash">
            <div class="dash-header">
                <i class="fas fa-tint fa-lg"></i>
                <p>Total blood sugar events</p>
            </div>
            <div class="dash-main">
                <div class="main-contents">
                    {#if getBloodSugarValuesFromEventsByDay(DEMO_EVENTS, date).totalEvents == 0}
                    <p>Not Enough events</p>
                    {:else if getBloodSugarValuesFromEventsByDay(DEMO_EVENTS, date).totalEvents == 1}
                    <h1>{getBloodSugarValuesFromEventsByDay(DEMO_EVENTS, date).totalEvents + ' event'}</h1>
                    {:else}
                    <h1>{getBloodSugarValuesFromEventsByDay(DEMO_EVENTS, date).totalEvents + ' events'}</h1>
                    {/if}
                </div>
            </div>
            <div class="dash-footer">
                {#if getBloodSugarValuesFromEventsByDay(DEMO_EVENTS, moment(date).subtract(1, 'day').format('ddd, D MMM YYYY')).totalEvents == 0}
                <p>Not enough events</p>
                {:else}
                <p>Previous Day: {getBloodSugarValuesFromEventsByDay(DEMO_EVENTS, moment(date).subtract(1, 'day').format('ddd, D MMM YYYY')).totalEvents}</p>
                {/if}
            </div>
        </div>
        <div class="dash">
            <div class="dash-header">
                <i class="fas fa-tint fa-lg"></i>
                <p>Average blood sugar</p>
            </div><div class="dash-main">
                <div class="main-contents">
                    {#if Math.round(getBloodSugarValuesFromEventsByDay(DEMO_EVENTS, date).average) == 0}
                    <p>Not Enough Events</p>
                    {:else}
                    <h1>{Math.round(getBloodSugarValuesFromEventsByDay(DEMO_EVENTS, date).average) + ' mg/dL'}</h1>
                    {/if}
                </div>
            </div>
            <div class="dash-footer">
                {#if Math.round(getBloodSugarValuesFromEventsByDay(DEMO_EVENTS, moment(date).subtract(1, 'day').format('ddd, D MMM YYYY')).average) == 0}
                <p>Not enough events</p>
                {:else}
                <p>Previous Day: {Math.round(getBloodSugarValuesFromEventsByDay(DEMO_EVENTS, moment(date).subtract(1, 'day').format('ddd, D MMM YYYY')).average)}</p>
                {/if}
            </div>
        </div>
        <div class="dash">
            <div class="dash-header">
                <i class="fas fa-tint fa-lg"></i>
                <p>Events between 70 and 180</p>
            </div>
            <div class="dash-main">
                <div class="main-contents">
                    {#if Math.round(getBloodSugarValuesFromEventsByDay(DEMO_EVENTS, date).percentageBetweenRange) == 0}
                    <p>Not enough events</p>
                    {:else}
                    <h1>{Math.round(getBloodSugarValuesFromEventsByDay(DEMO_EVENTS, date).percentageBetweenRange) + ' %'}</h1>
                    {/if}
                </div>
            </div>
            <div class="dash-footer">
                {#if Math.round(getBloodSugarValuesFromEventsByDay(DEMO_EVENTS, moment(date).subtract(1, 'day').format('ddd, D MMM YYYY')).percentageBetweenRange) == 0}
                <p>Not enough events</p>
                {:else}
                <p>Previous Day: {Math.round(getBloodSugarValuesFromEventsByDay(DEMO_EVENTS, moment(date).subtract(1, 'day').format('ddd, D MMM YYYY')).percentageBetweenRange)}</p>
                {/if}
            </div>
        </div>
    </div>
</div>




<style>
    .dashboard-header {
        display: flex;
        width: 35%;
        justify-content: space-between;
        align-items: center;
    }
    .dashboard-arrows {
        display: flex;
        justify-content: space-between;
    }
    .dashboard-date {
        margin: 1rem;
    }
    .dashboard-inner {
        display: flex;
        justify-content: space-around;
    }

    .dash {
        width: 30%;
        box-shadow: 0 3px 10px rgb(0 0 0 / 0.4);
        border-radius: 10px;
    }

    .dash-header {
        margin: 1rem;
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }

    .dash-main {
        display: flex;
        flex-direction: row-reverse;
        margin: 1rem;
    }

    .main-contents {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 25%;
    }

    .dash-footer {
        display: flex;
        justify-content: flex-end;
        margin: 1rem;
    }
</style>