// // const backButton = (date) => {
// //     const yesterday = date + moment().add(1, 'day');
// //     console.log(yesterday)
// //     // date = yesterday
// // }
// // backButton(date);

// <script>
//     import moment from 'moment';
//     // import DashboardMain from './dashboardMain.svelte';
    
//     const DEMO_EVENTS = [
//         { value: 100, time: moment() },
//         { value: 155, time: moment() },
//         { value: 83, time: moment() },
//         { value: 211, time: moment().subtract(1, 'day') },
//         { value: 138, time: moment().subtract(1, 'day') },
//         { value: 55, time: moment().subtract(1, 'day') },
//         { value: 183, time: moment().subtract(2, 'day') },
//         { value: 103, time: moment().subtract(2, 'day') },
//         { value: 98, time: moment().subtract(3, 'day') }
//     ];

//     let dateInReference = moment().format('ddd, D MMM YYYY');
//     let averageBloodSugarInReference = '0';
    
//     const filterDEMO_EVENTS = () => {
//         const filteredEventsByDay = DEMO_EVENTS.filter(eventsForTheDay => eventsForTheDay.time.format('ddd, D MMM YYYY') === dateInReference);
//         console.log('FILTERED EVENTS', filteredEventsByDay);
//         return filteredEventsByDay;

//         let averageBloodSugar = () => {
//             const totalOfAllEvents = filterDEMO_EVENTS();
//             let sum = 0;
//             for (let i = 0; i < filterDEMO_EVENTS().length; i++) {
//                 sum += filterDEMO_EVENTS().length;
//             }
//             return sum;
//         }
//         console.log('average blood sugar', averageBloodSugar());
//     }
//     filterDEMO_EVENTS();

//     let totalBloodSugarEvents = filterDEMO_EVENTS().length
//     console.log('total blood sugar events:', totalBloodSugarEvents);

 

//     const backButton = () => {
//         const previousDay = moment(dateInReference).subtract(1, 'day').format('ddd, D MMM YYYY');
//         dateInReference = previousDay;
//         filterDEMO_EVENTS();
//         totalBloodSugarEvents = filterDEMO_EVENTS().length
//     }

//     const forwardButton = () => {
//         const nextDay = moment(dateInReference).add(1, 'day').format('ddd, D MMM YYYY');
//         dateInReference = nextDay
//         filterDEMO_EVENTS();
//         totalBloodSugarEvents = filterDEMO_EVENTS().length
//     }

// </script>

// <div class="dashboard-container">
//     <div class="dashboard-header">
//         <div class="dashboard-date">
//             <h1>{dateInReference}</h1>
//         </div>
//         <div class="dashboard-arrows">
//             <button on:click={backButton}>
//                 Back
//             </button>
//             <button on:click={forwardButton}>
//                 Forward
//             </button>
//         </div>    
//     </div>
//     <!-- <DashboardMain /> -->
//     <div class="dashboard-inner">
//         <div class="dash">
//             <div class="dash-header">
//                 <i class="fas fa-tint fa-lg"></i>
//                 <p>Total blood sugar events</p>
//             </div>
//             <div class="dash-main">
//                 <div class="main-contents">
//                     <h1>events: {totalBloodSugarEvents}</h1>
//                     <!-- <p>events</p> -->
//                 </div>
//             </div>
//             <div class="dash-footer">
//                 <p>Previous day - 3</p>
//             </div>
//         </div>
//         <div class="dash">
//             <div class="dash-header">
//                 <i class="fas fa-tint fa-lg"></i>
//                 <p>Average blood sugar</p>
//             </div><div class="dash-main">
//                 <div class="main-contents">
//                     <h1>{averageBloodSugarInReference}</h1>
//                     <p>mg/dL</p>
//                 </div>
//             </div>
//             <div class="dash-footer">
//                 <p>Previous day - 150</p>
//             </div>
//         </div>
//         <div class="dash">
//             <div class="dash-header">
//                 <i class="fas fa-tint fa-lg"></i>
//                 <p>Events between 70 and 180</p>
//             </div>
//             <div class="dash-main">
//                 <div class="main-contents">
//                     <h1>75</h1>
//                     <p>%</p>
//                 </div>
//             </div>
//             <div class="dash-footer">
//                 <p>Previous day - 80%</p>
//             </div>
//         </div>
//     </div>
// </div>




// <style>
//     .dashboard-header {
//         display: flex;
//         width: 35%;
//         justify-content: space-between;
//         align-items: center;
//     }
//     .dashboard-arrows {
//         display: flex;
//         justify-content: space-between;
//     }
//     .dashboard-date {
//         margin: 1rem;
//     }
//     .dashboard-inner {
//         display: flex;
//         justify-content: space-around;
//     }

//     .dash {
//         width: 30%;
//         box-shadow: 0 3px 10px rgb(0 0 0 / 0.4);
//         border-radius: 10px;
//     }

//     .dash-header {
//         margin: 1rem;
//         display: flex;
//         align-items: center;
//         justify-content: flex-start;
        
//     }

//     .dash-main {
//         display: flex;
//         flex-direction: row-reverse;
//         margin: 1rem;
//     }

//     .main-contents {
//         display: flex;
//         justify-content: space-around;
//         align-items: center;
//         width: 25%;
//     }
//     .dash-footer {
//         display: flex;
//         justify-content: flex-end;
//         margin: 1rem;
//     }
// </style>