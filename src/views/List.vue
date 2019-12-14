<template>
  <div class="home">
    <div class="panel panel-info">
      <div class="panel-heading">
        <h3 class="panel-title">列表页</h3>
      </div>
      <router-link class="btn btn-primary" :to="{name: 'Editor'}">新增</router-link>

      <div class="form-inline" role="form">
        <div class="form-group">
          <label class="sr-only" for>关键字</label>
          <input type="email" class="form-control" v-model="keyword" placeholder="请输入姓名或者QQ" />
        </div>
      </div>

      <div class="panel-body">
        <table class="table table-striped table-hover">
          <thead>
            <tr>
              <th>序号</th>
              <th>姓名</th>
              <th>qq</th>
              <th>手机号</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(person, index) in filterList" :key="person.id">
              <td>{{index+1}}</td>
              <td>{{person.name}}</td>
              <td>{{person.qq}}</td>
              <td>{{person.mobile}}</td>
              <td>
                <router-link
                  :to="{name: 'Editor', query: { id: person.id }}"
                  class="btn btn-small btn-info"
                >修改</router-link>
                <button @click="delOne(person.id)" class="btn btn-small btn-danger">删除</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { getAllPeople, deleteOne } from '../utils/db'

export default {
  name: 'List',
  data() {
    return {
      list: [],
      keyword: ''
    }
  },
  created() {
    this.list = getAllPeople()
  },
  mounted() {},
  methods: {
    delOne(id) {
      // 删除
      if (confirm('是否确认删除?')) {
        deleteOne(id)
        this.list = getAllPeople()
      }
    }
  },
  computed: {
    filterList() {
      return this.list.filter(
        item =>
          item.name.indexOf(this.keyword) > -1 ||
          item.qq.indexOf(this.keyword) > -1
      )
    }
  }
}
</script>
