<!-- htmlの表示に関わること関連 -->
<template>
    <div>
        <div class="divTitle">r05comp.vueです。</div>
        <div class="divMsg">{{ message }}</div>
    </div>
</template>

<!-- script関連 -->
<script>
    module.exports = {
        data: function(){
            return {
                message: "片岡先生"
            }
        }
    }
</script>

<!-- css関連 -->
<style>
    .divTitle{
        /* 文字色を赤に */
        color: #ff0000;
    }
</style>
<style scoped>
    .divMsg{
        color: #00ff00;
    }
</style>