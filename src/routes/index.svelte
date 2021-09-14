<script>
    import Header from './components/header/header.svelte'
    import Dashboard from './components/main/dashboard/dashboard.svelte'
</script>

<Header />
<Dashboard />


<style>
    @font-face {
        font-family: 'Nunito';
        src: url('/fonts/nunito-regular.woff') format('woff');
    }

    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        font-family: 'Nunito';
    }
</style>
