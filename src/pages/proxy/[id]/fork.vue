<template>
  <v-container class="pa-md-12">
    <v-card style="aspect-ratio: 4/3" rounded="lg">
      <v-img
        :src="'https://scratch.192325.xyz/thumbnails/' + project.id"
        class="align-end"
        lazy-src="../../../assets/43-lazyload.png"
        height="100%"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        cover
      >
        <v-card-item>
          <v-card-title>{{ project.title }} </v-card-title>
          <v-card-subtitle>{{ project.description }} </v-card-subtitle>
        </v-card-item>
        <!--<v-card-text>
                    <v-chip size="small">{{ item.type }}</v-chip>
                  </v-card-text>-->
      </v-img>
    </v-card>

    <br />
    <v-text>如果您已了解以上内容，请在下方的输入框中输入</v-text> <br /><br />
    <v-text-field
      hint="请准确输入上方的话"
      label="我保证会好好对待改编的作品"
      type="input"
      v-model="checktext"
      :rules="textRules"
      required
      variant="outlined"
      clearable
    ></v-text-field>
    <br />
    <v-btn
      class="text-none"
      color="primary"
      rounded="xl"
      text="Fork"
      variant="flat"
      size="large"
      @click="getProjectFile(project.id)"
      append-icon="mdi-arrow-right"
      :disabled="!checktext"
    ></v-btn>
    <!-- login button  -->
  </v-container>
</template>

<script>
import openEditor from "../../../stores/openEdit";

import request from "../../../axios/axios";
import { localuser } from "@/stores/user";
export default {
  data() {
    return {
      project: {},
      projectfile: {},
      newid: "",
      openEditor: openEditor,
      localuser: localuser,
      checktext: "",
      checkknow: false,
      checklicense: false,
      scratch_proxy: import.meta.env.VITE_APP_SCRATCH_PROXY,

      textRules: [
        (value) => {
          if (value) return true;

          return "记得输入内容哦~";
        },
        (value) => {
          if (value != "我保证会好好对待改编的作品") {
            return "输的不太对~";
          }
        },
      ],
    };
  },

  async created() {
    await this.getproject();
  },

  methods: {
    async getproject() {
      this.project = await request({
        url: this.scratch_proxy + "/projects/" + this.$route.params.id,
        method: "get",
      });
      console.log(this.project);
    },
    async forkproject(id) {
      await request({
        url: "/project/" + id + "/fork",
        method: "post",
      })
        .then((res) => {
          console.log(res);
          this.$toast.add({
            severity: "success",
            summary: "成功",
            detail: "分叉成功",
            life: 3000,
          });
          if (res.id) {
            this.$router.push("/projects/" + res.id);
          }
        })
        .catch((err) => {
          console.log(err);
          this.$toast.add({
            severity: "error",
            summary: "错误",
            detail: err,
            life: 3000,
          });
        });
    },
    async getProjectFile() {
      try {
        // 获取项目详情
        await this.getproject();

        // 获取项目文件
        const projectFileRes = await request({
          url: `${this.scratch_proxy}/projects/source/${this.$route.params.id}?token=${this.project.project_token}`,
          method: "get",
        });

        console.log(projectFileRes);
        this.$toast.add({
          severity: "success",
          summary: "成功",
          detail: "获取项目文件成功",
          life: 3000,
        });
        this.projectfile = projectFileRes;

        // 提交项目
        const createProjectRes = await request.post("/project/", {
          title: this.project.title,
          type: "scratch",
          state: "public",
        });

        console.log(createProjectRes);
        this.$toast.add({
          severity: "info",
          summary: "信息",
          detail: createProjectRes,
          life: 3000,
        });

        if (createProjectRes.status === "1") {
          this.newid = createProjectRes.id;

          // 上传项目文件
          const uploadRes = await request.put(
            `/project/${this.newid}/source`,
            this.projectfile
          );
          console.log(uploadRes);
          this.$toast.add({
            severity: "info",
            summary: "信息",
            detail: uploadRes,
            life: 3000,
          });

          // 推送项目
          const pushRes = await request.post(`/project/${this.newid}/push`);
          console.log(pushRes);
          this.$toast.add({
            severity: "info",
            summary: "信息",
            detail: pushRes,
            life: 3000,
          });
        }
      } catch (error) {
        console.error(error);
        this.$toast.add({
          severity: "error",
          summary: "错误",
          detail: "操作失败，请稍后再试",
          life: 3000,
        });
      }
    },
  },
};
</script>
