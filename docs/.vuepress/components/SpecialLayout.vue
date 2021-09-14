<template>
    <div id="home">
        <NavLayout></NavLayout>
        <IndexHome></IndexHome>
        <!-- <IndexHomeMobile></IndexHomeMobile> -->
        <FooterComponent />
    </div>
</template>
<script>
import FooterComponent from "./FooterComponent.vue"
export default {
    computed: {
    },
    components: {
        FooterComponent
    }
}
</script>
<style scoped>
#home >>> header.navbar {
    position: absolute;
    background: none !important;
    border-bottom: none;
    /* padding: 0.7rem 14.5rem; */
    /* border-bottom: 1px solid #999; */
    /* position: fixed;
    top: 0;
    left: 0; */
}
#home >>> .navbar .links {
    background: none !important;
    /* right: 14.5rem; */
}

#home >>> .navbar .links .search-box input {
    background: #fff0 url(/assets/img/search.83621669.svg) 0.6rem 0.5rem
        no-repeat;
    background-size: 1rem;
}

#home >>> .navbar .nav-item button.dropdown-title,
#home >>> .navbar .nav-item .icon.outbound,
#home >>> .navbar .nav-item > a {
    color: #fff;
}
</style>
<style lang="scss" scoped>
#home {
    font-family: sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
}
footer {
    margin-top: 3.125rem;
    padding: 2.5rem;
    border-top: 1px solid #eaecef;
    text-align: center;
    a {
        color: #4e6e8e;
        cursor: pointer;
    }
}
</style>