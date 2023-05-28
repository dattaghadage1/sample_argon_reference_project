<template>
  <div class="container">
    <h3 class="h4 text-success font-weight-bold mb-4 mt-5">Alerts</h3>
    <!-- here call multiple time component and pass diff. types props value -->
    <base-alert icon="ni ni-like-2" dismissible type="success">
      <div slot="text">
        <strong>Success!</strong> This is a success alert—check it out!
      </div>
    </base-alert>
    <base-alert icon="ni ni-bell-55" dismissible type="info">
      <div slot="text">
        <strong>Info!</strong> This is a info alert—check it out!
      </div>
    </base-alert>
    <base-alert icon="ni ni-bell-55" dismissible type="warning">
      <div slot="text">
        <strong>Warning!</strong> This is a warning alert—check it out!
      </div>
    </base-alert>
    <base-alert icon="ni ni-support-16" dismissible type="danger">
      <div slot="text">
        <strong>Danger!</strong> This is an error alert—check it out!
      </div>
    </base-alert>
  </div>
</template>
<script>
import BaseAlert from "../Common/BaseAlert.vue";

export default {
  components: {
    BaseAlert
  },
};
</script>
<style></style>
