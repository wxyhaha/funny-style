<template>
  <div class="pageWrapper">
    <div class="card" ref="cardRef" :style="styles">
      <div class="card-cont" @mousemove="mouseMove" @mouseout="mouseOut">
        这是一个卡片
      </div>
    </div>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";

const cardRef = ref(null)

const useMouse = (width, height, cardEl) => {
  const MAX_DEG = 20;
  let hoverEl = null;
  const HOVER_SIZE = 300;

  onMounted(() => {
    hoverEl = document.createElement("div");
    hoverEl.className = "hover-element";
    cardEl.value.append(hoverEl);
  });

  const styles = ref('');
  const halfWidth = width / 2;
  const halfHeight = height / 2;
  const mouseMove = (ev) => {
    const {offsetX, offsetY} = ev;

    let rotateX = 0;
    let rotateY = 0;
    rotateX = -((halfHeight - offsetY) / halfHeight) * MAX_DEG;
    rotateY = ((halfWidth - offsetX) / halfWidth) * MAX_DEG;
    styles.value = `transform:perspective(1400px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    if (hoverEl) {
      const hX = offsetX - HOVER_SIZE / 2;
      const hY = offsetY - HOVER_SIZE / 2;
      hoverEl.style = `transform: translate(${hX}px, ${hY}px);`;
    }
  }
  const mouseOut = (ev) => {
    styles.value = '';
  }

  return {
    styles,
    mouseMove,
    mouseOut,
  };
}

const {
  styles: styles,
  mouseMove: mouseMove,
  mouseOut: mouseOut
} = useMouse(700, 500, cardRef);
</script>

<style lang="scss">
.pageWrapper {
  width: 100%;
  height: 100%;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card {
  width: 700px;
  height: 500px;
  border-radius: 10px;
  background-color: #161616;
  color: white;
  position: relative;
  z-index: 1;
  overflow: hidden;

  &:hover {
    .hover-element {
      visibility: visible;
    }
  }
}

.card-cont{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  font-weight: 900;
}

.hover-element {
  background: rgba(77, 82, 232, 0.6);
  border-radius: 50%;
  -webkit-filter: blur(64px);
  filter: blur(64px);
  width: 300px;
  height: 300px;
  left: 0;
  top: 0;
  position: absolute;
  visibility: hidden;
  z-index: -1;
}
</style>