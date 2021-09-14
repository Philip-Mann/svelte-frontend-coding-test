<script>
    import moment from 'moment';
    const date = `${moment().format('ddd, D MMM YYYY')}`

    const rn = moment();
    
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
        
        const totalBloodSugarEvents = () => {
            const eventsToday = DEMO_EVENTS.map(data => {
                return `${data.value}`
            });
            return eventsToday;
        }
        totalBloodSugarEvents();

</script>


<!-- TODO: Figure out why eventsToday isnt rendering correctly -->

<ul>
    <li>
        {totalBloodSugarEvents()}
    </li>
</ul>
<div class="dashboard-container">
    <div class="dashboard-header">
        <div class="dashboard-date">
            <h1>{date}</h1>
        </div>
        <div class="dashboard-arrows">
            <div class="image img1">
                <img src="./public/images/arrow-sprite.png" alt="dummy" />
            </div>
            <div class="image img2">
                <img src="./public/images/arrow-sprite.png" alt="dummy" />
            </div>
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
                    <h1>3</h1>
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
                    <h1>123</h1>
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
                    <h1>75</h1>
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
    .dashboard-date {
        margin: 1rem;
    }
    .image {
        width: 20px;
        height: 26px;
        overflow: hidden;
        margin: 1rem;
    }
    .image img {
        margin-top: -85%;
        width: 100%;
        transform: scaleX(-1);
    }
    .img2 img {
        transform: scaleX(1);
    }
    .dashboard-container {
        height: 20rem;
    }
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