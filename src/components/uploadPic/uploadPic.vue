<template>
  <div>
    <br>
    <label>标签</label>
    <el-select v-model="tag" multiple placeholder="请选择">
      <el-option
        v-for="item in options"
        :key="item.tag_id"
        :label="item.tag_name"
        :value="item.tag_id">
      </el-option>
    </el-select>
    <el-upload
      class="upload-demo"
      ref="upload"
      action=""
      multiple
      :before-upload="beforeUpload"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :on-change="change"
      :file-list="fileList2"
      list-type="picture"
      :auto-upload="false">
      <el-button slot="trigger" size="small" type="primary">点击上传</el-button>
      <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
      <div slot="tip" class="el-upload__tip">已选择 <strong>{{fileNum}}</strong> 张图片</div>
    </el-upload>
  </div>
</template>

<script type="text/ecmascript-6">
import axios from 'axios'
export default {
  data () {
    return {
      fileList2: [],
      fileNum: 0,
      options: [],
      tag: [],
      value11: []
    }
  },
  created () {
    this._getTags()
  },
  methods: {
    _getTags () {
      axios({
        url: 'http://mc.urzz.me:8080/tag/list',
        method: 'get'
      })
        .then(res => {
          console.log(res)
          if (res.data.status) {
            this.options = res.data.data
          }
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    handleRemove (file, fileList) {
      this.fileNum--
    },
    handlePreview (file) {
      console.log(file)
    },
    submitUpload (file) {
      this.$refs.upload.submit()
    },
    beforeUpload (file) {
      let fd = new FormData()
      fd.append('file', file)
      axios({
        method: 'post',
        url: 'http://mc.urzz.me:8080/picture/upload/',
        timeout: 20000,
        data: fd
      })
        .then(res => {
          this.$router.push({path: '/picManguage'})
        })
      return true
    },
    change (file) {
      this.fileNum++
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.upload-demo{
  margin-top: 20px;
}
</style>
