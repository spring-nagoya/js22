
<!-- html側の表示(今回は未入力) -->
<template>
    <div>
        <div class="error">未入力</div>
    </div>
</template>

<!-- script関連の記述 -->
<script>
    module.exports = {
        // vueのname定義(今回は'kadai5.vue')
        name: 'kadai5'
    }

</script>

<style scoped>

    .error{
        color: #ff00ff;
    }
</style>