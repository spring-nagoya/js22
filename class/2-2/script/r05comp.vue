<template>
    <div>
        <div class="divTitle">r05comp.vueです。</div>
        <div>{{ message }}</div>
    </div>
</template>

<script>
module.exports = {
    data: function () {
        return {
            message: "大嶋"
        }
    },
}
</script>

<style>
.divTitle {
    font-size: 1.5em;
    font-weight: bold;
    color: #0000ff;
    background-color: #ff0000;
    padding: 10px;
    margin: 10px;
}

.divMessage {
    font-size: 1.5em;
    font-weight: bold;
    color: #0000ff;
    background-color: #ff0000;
    padding: 10px;
    margin: 10px;
}
</style>