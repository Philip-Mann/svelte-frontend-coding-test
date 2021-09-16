<script>
    import moment from 'moment';
    // import DashboardMain from './dashboardMain.svelte';
    let dateInReference = moment().format('ddd, D MMM YYYY');
    
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
    
    let averageBloodSugarInReference = 0;
    let totalBloodSugarEventsInReference = 0;
    let percentageOfDayInReference = 0;
    
    const dailyValues = (arr) => {
        const filteredEventsByDay = arr.filter(eventsForTheDay => 
        eventsForTheDay.time.format('ddd, D MMM YYYY') === dateInReference
        );
        console.log('FILTERED EVENTS', filteredEventsByDay);
        let sum = 0;
        for(let i = 0; i < filteredEventsByDay.length; i++) {
            sum += filteredEventsByDay[i].value;
        }
        let counter = 0;
        for(let i = 0; i < filteredEventsByDay.length; i++) {
            if (filteredEventsByDay[i].value >= 70 && filteredEventsByDay[i].value <= 180 ) {
                counter++;
            }
        }
        percentageOfDayInReference = counter / filteredEventsByDay.length * 100;
        const dailyAverage = sum / filteredEventsByDay.length;
        averageBloodSugarInReference = dailyAverage;
        totalBloodSugarEventsInReference = filteredEventsByDay.length;
    }
    dailyValues(DEMO_EVENTS);
 
    const backButton = () => {
        const previousDay = moment(dateInReference).subtract(1, 'day').format('ddd, D MMM YYYY');
        dateInReference = previousDay;
        dailyValues(DEMO_EVENTS);
    }

    const forwardButton = () => {
        const nextDay = moment(dateInReference).add(1, 'day').format('ddd, D MMM YYYY');
        dateInReference = nextDay
        dailyValues(DEMO_EVENTS);
    }

</script>

<div class="dashboard-container">
    <div class="dashboard-header">
        <div class="dashboard-date">
            <h1>{dateInReference}</h1>
        </div>
        <div class="dashboard-arrows">
            <button on:click={backButton}>
                Back
            </button>
            <button on:click={forwardButton}>
                Forward
            </button>
        </div>    
    </div>
    <!-- <DashboardMain /> -->
    <div class="dashboard-inner">
        <div class="dash">
            <div class="dash-header">
                <i class="fas fa-tint fa-lg"></i>
                <p>Total blood sugar events</p>
            </div>
            <div class="dash-main">
                <div class="main-contents">
                    <h1>{totalBloodSugarEventsInReference}</h1>
                    <p>events</p>
                </div>
            </div>
            <div class="dash-footer">
                <p>Previous day - 3</p>
            </div>
        </div>
        <div class="dash">
            <div class="dash-header">
                <i class="fas fa-tint fa-lg"></i>
                <p>Average blood sugar</p>
            </div><div class="dash-main">
                <div class="main-contents">
                    <h1>{Math.round(averageBloodSugarInReference)}</h1>
                    <p>mg/dL</p>
                </div>
            </div>
            <div class="dash-footer">
                <p>Previous day - 150</p>
            </div>
        </div>
        <div class="dash">
            <div class="dash-header">
                <i class="fas fa-tint fa-lg"></i>
                <p>Events between 70 and 180</p>
            </div>
            <div class="dash-main">
                <div class="main-contents">
                    <h1>{Math.round(percentageOfDayInReference)}</h1>
                    <p>%</p>
                </div>
            </div>
            <div class="dash-footer">
                <p>Previous day - 80%</p>
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