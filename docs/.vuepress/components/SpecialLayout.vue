<template>
    <div id="home">
        <NavLayout></NavLayout>
        <IndexHome></IndexHome>
    </div>
</template>
<script>
export default {
    computed: {
    },
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
</style>
<style lang="scss" scoped>
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