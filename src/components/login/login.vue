<template>
  <div class="login">
    <div class="mybox">
      <el-form
        :rules="rules"
        label-position="top"
        :model="useobj"
        status-icon
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <h2>用户登录</h2>
        <el-form-item label="用户名" prop="username">
          <el-input type="text" v-model="useobj.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="useobj.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="mylogin" @click.prevent="login">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      useobj: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  methods: {
    login() {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          this.$http({
            method: "POST",
            url: "http://localhost:8888/api/private/v1/login",
            data: this.useobj
          })
            .then(res => {
              let { data, meta } = res.data;
              if (meta.status === 200) {

                // window.localStorage.setItem('token',data.token)

                this.$router.push("/");
                this.$message({
                    message:meta.msg,
                    type:'success'
                })
              } else {
                this.$message.error(meta.msg);
              }
            })
            .catch(err => {
              console.log(err);
            });
        } else {
        }
      });
    }
  }
};
</script>

<style>
.login {
  width: 100%;
  height: 100%;
  background-color: burlywood;
  position: relative;
}
.mybox {
  width: 580px;
  height: 440px;
  background-color: #fff;
  border-radius: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 40px;
  box-sizing: border-box;
}
.mylogin {
  width: 100%;
}
</style>
