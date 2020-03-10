<template>
  <div id="Header">
    <div class="header">
      <h1 class="header-todo-app"  v-show="Hidetitle">Heros</h1>
      <input
        type="text"
        name="Heros"
        class="cust-add-hero"
        placeholder="Enter a Hero..."
        v-model="heroname"
        v-show="showInput"
      />
      <button class="cust-add-btn" v-show="showInput" @click="AddToList">
        <big>&#43;</big>
      </button>
      <ul class="Custom-style">
        <li class="custom-list" v-for="(item,index) in Storedata" :key="index">
          {{item.hero}}
          <span @click="DeleteHero(item.hero,index)" style="float: right;">
            <font-awesome-icon icon="trash" />
          </span>
        </li>
      </ul>
      <div class="cust-btn">
        <button class="cust-btn-2" @click="addHero">Add Hero &#43;</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Heros",
  data() {
    return {
      Hidetitle: true,
      showInput: false,
      heroname: ""
    };
  },
  computed: {
    Storedata() {
      return this.$store.getters.getHeros;
    }
  },
  methods: {
    addHero() {
      if (this.Hidetitle === true) {
        this.Hidetitle = false;
        this.showInput = true;
      }
    },
    AddToList() {
      let obj = {};
      obj.hero = this.heroname;
      this.$store.dispatch("add_hero", obj);
      this.heroname = "";
      this.$root.$emit("NOTIFICATION",this.$store.getters.getHeros)
      this.$root.$emit("NOTIFICATION_HERO",obj)

    },
    DeleteHero(hero,hero_id) {
      this.$store.dispatch("delete_hero", hero_id);
      this.$store.dispatch("noti_delete_hero",hero);
      this.$root.$emit('NOTI_DEL_HERO',this.$store.getters.deleted_hero);
    }
  }
};
</script>

<style scoped>
.Custom-style {
  list-style: none;
  text-align: center;
  margin-right: 9%;
  font-size: 2vw;
}
.custom-list {
  color: white;
  padding: 12px;
  padding-bottom: 11px;
  background: purple;
  width: 30%;
  text-align: center;
  margin: 12px 36%;
  border-radius: 6px;
}
.cust-btn {
  position: absolute;
  left: 36%;
  margin-top: 2%;
}
.cust-btn-2 {
  border-radius: 20px;
  font-size: 12px;
  background: none;
  border: 1px solid #000;
  padding: 1px 5px 1px 5px;
}
.cust-add-hero {
  position: relative;
  margin-top: 7%;
  left: 41%;
  height: 25px;
}
.cust-add-btn {
  position: relative;
  left: 43%;
  background: none;
  padding: 1px 5px;
  border: 1px solid;
  border-radius: 14px;
}
.header-todo-app {
  color: orange;
  font-size: 300%;
  position: relative;
  left: 42%;
}
</style>
