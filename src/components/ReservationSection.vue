<script setup lang="ts">
import { onBeforeUnmount, reactive, ref } from "vue";
import { guestOptions, reservationTimes } from "../data/site";
import type { ReservationForm } from "../types/site";

const getLocalDate = () => {
  const now = new Date();
  const localNow = new Date(now.getTime() - now.getTimezoneOffset() * 60 * 1000);
  return localNow.toISOString().slice(0, 10);
};

const localToday = getLocalDate();
const form = reactive<ReservationForm>({
  date: localToday,
  time: "",
  guests: "",
  phone: "",
  note: "",
});

const formElement = ref<HTMLFormElement | null>(null);
const successDialog = ref<HTMLDialogElement | null>(null);
const successMessage = ref("订位信息已收到，我们稍后将致电确认。");

const resetForm = () => {
  form.date = localToday;
  form.time = "";
  form.guests = "";
  form.phone = "";
  form.note = "";
};

const submitReservation = () => {
  if (!formElement.value?.checkValidity()) {
    formElement.value?.reportValidity();
    return;
  }

  const date = new Date(`${form.date}T12:00:00`);
  const formattedDate = new Intl.DateTimeFormat("zh-CN", {
    month: "long",
    day: "numeric",
    weekday: "short",
  }).format(date);

  successMessage.value = `已记录：${formattedDate} ${form.time}，${form.guests}。我们会尽快致电确认。`;
  successDialog.value?.showModal();
  resetForm();
};

const closeDialog = () => {
  successDialog.value?.close();
};

const closeDialogOnBackdrop = (event: MouseEvent) => {
  if (event.target === event.currentTarget) closeDialog();
};

onBeforeUnmount(() => {
  if (successDialog.value?.open) closeDialog();
});
</script>

<template>
  <section
    id="reservation"
    class="reservation"
    aria-labelledby="reservation-title"
  >
    <div class="reservation__leaf" aria-hidden="true"></div>
    <div class="reservation__inner">
      <div class="reservation__intro">
        <p v-reveal class="eyebrow">RESERVATION</p>
        <h2
          id="reservation-title"
          v-reveal
          class="display-title display-title--light"
        >
          山野等你，<br />
          共赴一餐。
        </h2>
        <p v-reveal>
          周末座位有限，建议提前 1—2 天预订。8 人以上聚餐请致电
          028-8556 1226。
        </p>
      </div>

      <form
        ref="formElement"
        v-reveal
        class="reservation-form"
        novalidate
        @submit.prevent="submitReservation"
      >
        <div class="form-row">
          <label>
            <span>到店日期</span>
            <input v-model="form.date" type="date" name="date" :min="localToday" required />
          </label>
          <label>
            <span>到店时间</span>
            <select v-model="form.time" name="time" required>
              <option value="" disabled>选择时段</option>
              <option v-for="time in reservationTimes" :key="time" :value="time">
                {{ time }}
              </option>
            </select>
          </label>
        </div>
        <div class="form-row">
          <label>
            <span>用餐人数</span>
            <select v-model="form.guests" name="guests" required>
              <option value="" disabled>选择人数</option>
              <option v-for="guests in guestOptions" :key="guests" :value="guests">
                {{ guests }}
              </option>
            </select>
          </label>
          <label>
            <span>联系电话</span>
            <input
              v-model="form.phone"
              type="tel"
              name="phone"
              placeholder="请输入手机号码"
              pattern="1[3-9][0-9]{9}"
              required
            />
          </label>
        </div>
        <label class="form-full">
          <span>称呼 / 特别需求（选填）</span>
          <input
            v-model="form.note"
            type="text"
            name="note"
            placeholder="如：靠窗座位、生日用餐"
          />
        </label>
        <button class="button button--cream button--wide" type="submit">
          提交订位 <span aria-hidden="true">→</span>
        </button>
        <p class="form-note">提交后，我们会尽快与您确认座位。</p>
      </form>
    </div>

    <dialog
      ref="successDialog"
      class="success-dialog"
      @click="closeDialogOnBackdrop"
    >
      <button
        class="success-dialog__close"
        type="button"
        aria-label="关闭"
        @click="closeDialog"
      >
        ×
      </button>
      <span class="success-dialog__icon" aria-hidden="true">✓</span>
      <p class="eyebrow">RESERVATION RECEIVED</p>
      <h2>期待与你<br />在山野相见</h2>
      <p>{{ successMessage }}</p>
      <button class="button button--primary" type="button" @click="closeDialog">
        好的
      </button>
    </dialog>
  </section>
</template>
