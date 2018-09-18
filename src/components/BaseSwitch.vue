<template>
    <div>
        <input type="checkbox" id="switch" checked/><label for="switch" class="checkbox-label">Toggle</label>
    </div>
</template>

<script>
export default {
  name: 'BaseSwitch'
}
</script>

<style scoped>
    input[type=checkbox] {
        height: 0;
        width: 0;
        visibility: hidden;
    }

    .checkbox-label {
        cursor: pointer;
        text-indent: -9999px;
        width: 180px;
        height: 80px;
        background: #ccc;
        display: block;
        border-radius: 100px;
        position: relative;
    }

    .checkbox-label:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 80px;
        height: 80px;
        background: #fff;
        border-radius: 90px;
        transition: 0.3s;
    }

    input:checked + label {
        background: #4D2CB8;
    }

    input:checked + label:after {
        left: calc(100%);
        transform: translateX(-100%);
    }

    .checkbox-label:active:after {
        width: 130px;
    }

</style>
