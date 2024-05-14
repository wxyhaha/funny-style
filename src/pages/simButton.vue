<template>
  <div class="pageWrapper">
      <button class="simButton">
        <img src="../assets/good.png" alt="" style="width: 70%;height: 70%">
      </button>
  </div>
</template>

<script setup>

</script>

<style lang="scss">
.pageWrapper {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.simButton {
  width: 100px;
  height: 100px;
  font-size: 18px;
  background: #f3f0f1;
  float: left;
  border-radius: 50%;
  box-shadow: -6px -6px 10px rgba(255, 255, 255, 0.8), 6px 6px 10px rgba(0, 0, 0, 0.2);
  margin: 8px 2.5%;
  top: 45%;
  left: 0;
  right: 0;
  border: 0;
  transition: 300ms ease-out;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  &:active {
    box-shadow: inset 2px 2px 16px rgba(255, 255, 255, .9),
    inset 8px 8px 9px rgba(0, 0, 0, .2), 5px 10px 5px rgba(0, 0, 0, .03),
    -5px -5px 25px rgba(255, 255, 255, .1), -2px -2px 9px rgba(100, 100, 100, .1),
    inset -2px -2px 9px rgba(255, 255, 255, 1);
    outline: none;
    background-color: #e5e5ef;
    text-shadow: -2px -2px 3px rgba(0, 0, 0, .2), 2px 2px 3px rgba(255, 255, 255, 1);
    transform: translateY(3px);
  }
}

</style>