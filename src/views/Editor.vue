<template>
  <div class="editor">
    <div class="panel panel-info">
      <div class="panel-heading">
        <h3 class="panel-title">编辑</h3>
      </div>
      <div class="panel-body">
        <div role="form">
          <div class="form-group">
            <label for>姓名</label>
            <input type="text" class="form-control" v-model="person.name" placeholder="请输入姓名" />
          </div>
          <div class="form-group">
            <label for>QQ</label>
            <input type="text" class="form-control" v-model="person.qq" placeholder="请输入QQ" />
          </div>
          <div class="form-group">
            <label for>手机号</label>
            <input type="text" class="form-control" v-model="person.mobile" placeholder="请输入手机号" />
          </div>

          <button class="btn btn-danger btn-block" @click="saveHandle">保存</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { save, findOne, update } from '../utils/db'

export default {
  data() {
    return {
      person: {},
      isEdit: false,
      id: ''
    }
  },
  created() {
    if (this.$route.query.id) {
      this.isEdit = true
      this.id = this.$route.query.id
      this.person = findOne(this.id)
    }
  },
  methods: {
    saveHandle() {
      if (this.person.name && this.person.qq) {
        if (this.isEdit) {
          update(this.id, this.person)
        } else {
          this.person.id = Date.now()
          save(this.person)
        }

        this.$router.push({
          name: 'List'
        })
      } else {
        alert('请输入姓名和qq号')
      }
    }
  }
}
</script>
