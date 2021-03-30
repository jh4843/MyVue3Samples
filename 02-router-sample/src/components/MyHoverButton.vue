<template>
  <button class="button">
    {{ msg }}
  </button>
</template>

<script>
export default {
  name: "MyHoverButton",
  props: {
    msg: String,
  },
};
</script>

<style>
.button {
  background: #1b8f5a;
  transition: background 0.25s ease-in;
  border-radius: 4px;
  display: inline-block;
  border: none;
  padding: 0.75rem 1rem;
  margin: 0;
  text-decoration: none;
  color: #ffffff;
  font-family: sans-serif;
  font-size: 1rem;
  cursor: pointer;
  text-align: center;
  -webkit-appearance: none;
  -moz-appearance: none;
}

button:hover,
button:focus {
  transition: background 2s ease-out;
  background: #9bc8ce;
}

button:focus {
  outline: 1px solid #fff;
  outline-offset: -4px;
}
</style>