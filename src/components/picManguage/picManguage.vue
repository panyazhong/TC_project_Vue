<template>
  <div>
    <div class="picList">
      <el-card :body-style="{ padding: '10px' }" style="width: 180px;" v-for="card in cards" :key="card.id">
        <img @click="showPic" v-bind:src="card.src" class="image">
        <div>
          <el-tag
            size="mini"
            v-for="tag in tags"
            :key="tag.name"
            closable
            @close="deleteTag(tag.id)"
            :type="tag.type">
            {{tag.name}}
          </el-tag>
          <el-button
            size="mini"
            @click="open">
            +
          </el-button>
          <el-form ref="form" :model="form" label-width="0">
            <el-form-item>
              <el-checkbox-group v-model="form.type">
                <el-checkbox name="type">
                  <el-input class="modify-input"
                            size="mini"
                  ></el-input>
                  <el-button
                    size="mini"
                    @click="open">
                    修改
                  </el-button>
                </el-checkbox>
              </el-checkbox-group>
            </el-form-item>
          </el-form>
        </div>
      </el-card>
      <div class="clear"></div>
    </div>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="103">
    </el-pagination>
  </div>
</template>

<script type="text/ecmascript-6">
import Qs from 'qs'
import axios from 'axios'
axios.defaults.withCredentials = true
export default {
  data () {
    return {
      tags: [],
      cards: [],
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  created () {
    this.getPics()
    this.getTags()
  },
  methods: {
    getPics () {
      this.cards = [
        {src: 'http://element.eleme.io/static/hamburger.50e4091.png', id: 1},
        {src: 'https://www.baidu.com/img/bd_logo1.png', id: 2},
        {src: 'http://element.eleme.io/static/hamburger.50e4091.png', id: 3},
        {src: 'https://www.baidu.com/img/bd_logo1.png', id: 4},
        {src: 'http://element.eleme.io/static/hamburger.50e4091.png', id: 5}
      ]
    },
    getTags () {
      this.tags = [
        { name: '标签一', type: '', id: 0 },
        { name: '标签二', type: '', id: 1 },
        { name: '标签三', type: '', id: 2 },
        { name: '标签四', type: '', id: 3 },
        { name: '标签五', type: '', id: 4 }
      ]
    },
    open () {
      this.$prompt('请输入标签名', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      }).then(({ value }) => {
        this.tags.push({
          name: value,
          type: ''
        })
        this.$message({
          type: 'success',
          message: '新增标签: ' + value,
          duration: 1000
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消输入'
        })
      })
    },
    showPic (e) {
      this.$alert('<img src="' + e.target.currentSrc + '" class="image">', '', {
        dangerouslyUseHTMLString: true,
        showConfirmButton: false
      })
    },
    deleteTag (id) {
      let that = this
      axios.post('http://mc.urzz.me:8080/tag/delete', Qs.stringify({
        tag_id: id
      }))
        .then(function (response) {
          console.log(response)
          if (response.data.status) {
            alert(response.data.message)
          } else {
            if (response.data.message === '用户未登录') {
              alert('用户未登录')
              that.$router.push({path: '/login'})
            } else {
              alert(response.data.message)
            }
          }
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .clear{
    clear: both;
  }
  .picList{
    width: 100%;
    margin: 40px 0px;
  }
  .el-row{
    margin: 20px 0px;
  }
  .el-card{
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.5);
    float: left;
    margin-left: 20px;
  }
  .el-tag--mini {
    margin-right: 1px;
    margin-top: 5px;
  }
  .image{
    width: 100%;
  }
  .modify-input{
    width: 50%;
  }
</style>
