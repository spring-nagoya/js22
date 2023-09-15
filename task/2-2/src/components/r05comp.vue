<template>
    <div>
        <div class="divTitle">r05comp.vueです。</div>
        <div class="divMsg">{{ message }}</div>
    </div>
</template>
<script>
    module.exports = {
        data: function(){
            return {
                message: "らーめん"
            }
        }
    }
</script>

<style>
    .divTitle{
        color: #ff0000;
    }
</style>
<style scoped>
    .divMsg{
        color: #00ff00;
    }
</style>