<template>
  <div class="scroll">
    <p id="scrollText">
      部分功能尚未完全，剩余功能敬请期待！
    </p>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  mounted () {
    this.scrollText()
  },
  methods: {
    scrollText () {
      setInterval(() => {
        if (document.getElementById('scrollText')) {
          var scrolltext = document.getElementById('scrollText').innerText
          var newText = scrolltext.slice(1, scrolltext.length)
          var scrollArr = newText.split('')
          var deleteEl = scrolltext.split('').splice(0, 1)
          scrollArr.push(deleteEl[0])
          newText = scrollArr.join('')
          document.getElementById('scrollText').innerText = newText
        }
      }, 500)
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .scroll{
    width: 400px;
    height: 40px;
    margin: 50px auto;
    overflow: hidden;
  }
  .scroll p{
    font: bold 30px/40px '微软雅黑';
    white-space: nowrap;
  }
</style>
