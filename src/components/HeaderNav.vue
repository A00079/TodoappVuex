<template>
  <div id="Main">
    <nav class="navbar">
      <div class="brand-name">
        Ultimates
        <div class="notification" @click="showNotifications">
          <sup class="noti-badge">{{noti_count}}</sup>
          <font-awesome-icon icon="bell" class="bell" />
        </div>
        <div class="notify-box" v-show="showNotifi">
          <div align="center" class="noti-header">You have {{noti_count}} new notifications</div>
          <ul>
            <div v-if="noti_heros">
              <li class="li-notification" v-for="(item,index) in noti_heros" :key="index">
                <font-awesome-icon icon="flag" class="flag" />
                {{item}} has been added to your list.
              </li>
            </div>
            <div v-if="noti_deleted">
              <li class="li-notification" v-for="(item,index) in noti_deleted" :key="index">
                <font-awesome-icon icon="flag" class="flag" />
                {{item}} has been deleted from your list.
              </li>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "HeaderNav",
  data() {
    return {
      showNotifi: false,
      noti_count: 0,
      noti_heros: [],
      noti_deleted: []
    };
  },
  mounted() {
    this.$root.$on("NOTI_DEL_HERO", val => {
      this.noti_deleted = [val];
      this.noti_count += 1;
    });
    this.$root.$on("NOTIFICATION", val => {
      this.noti_count = val.length;
    });
    this.$root.$on("NOTIFICATION_HERO", val => {
      this.noti_heros.push(val.hero);
    });
  },
  methods: {
    showNotifications() {
      if (this.showNotifi == false) {
        if (this.noti_count > 0) {
          this.showNotifi = true;
        }
      } else {
        this.noti_count = 0;
        this.noti_deleted = [],
        this.noti_heros   = [],
        this.showNotifi = false;
      }
    }
  }
};
</script>

<style scoped>
.navbar {
  width: 100%;
  height: 40px;
  background: #000;
}
.brand-name {
  color: aliceblue;
  font-size: 3vw;
  line-height: 1.4em;
  padding: 0px 20px;
}
.notification {
  float: right;
}
.bell {
  font-size: 26px !important;
  padding-right: 40px;
}
.notify-box {
  float: right;
  width: 29%;
  height: 50%;
  margin-top: 4.5%;
  background: rgb(41, 38, 38);
  border-radius: 5px;
}
.noti-header {
  line-height: 24px;
  border-bottom: 1px solid #ccc;
  font-size: 15px;
  font-family: sans-serif;
}
.li-notification {
  font-size: 15px;
  line-height: 2;
  padding-left: 15px;
  font-family: SANS-SERIF;
  border-bottom: 1px solid orangered;
}
.flag {
  font-size: 12px;
  padding-right: 12px;
}
.noti-badge {
  background: #fff;
  color: #000;
  padding: 0px 3px;
  font-size: 12px;
  border-radius: 2px;
}
</style>
