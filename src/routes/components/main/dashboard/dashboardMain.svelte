<script>

</script>

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

<style>
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