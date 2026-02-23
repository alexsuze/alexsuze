<script setup>
import { ref } from 'vue'

const skills = ref([
  'Vue 3',
  'JavaScript',
  'Bootstrap 5',
  'Node.js',
  'Express',
  'HTML / CSS'
])

const projects = ref([
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio built with Vue3, Pinia, and Bootstrap5.',
    tags: ['Vue3', 'Bootstrap5', 'Pinia']
  }
])
</script>

<template>
  <div class="container py-5">
    <!-- Hero Section -->
    <section class="text-center mb-5">
      <h1 class="display-4 fw-bold">Hi, I'm Alex</h1>
      <p class="lead text-muted">
        A beginner Front-End Developer passionate about building web applications with Vue.
      </p>
    </section>

    <!-- Skills Section -->
    <section class="mb-5">
      <h2 class="mb-4">Skills</h2>
      <div class="row g-3">
        <div v-for="skill in skills" :key="skill" class="col-6 col-md-4 col-lg-2">
          <div class="card text-center h-100">
            <div class="card-body d-flex align-items-center justify-content-center">
              <span class="fw-semibold">{{ skill }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section class="mb-5">
      <h2 class="mb-4">Projects</h2>
      <div class="row g-4">
        <div v-for="project in projects" :key="project.title" class="col-md-6 col-lg-4">
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title">{{ project.title }}</h5>
              <p class="card-text text-muted">{{ project.description }}</p>
              <div>
                <span
                  v-for="tag in project.tags"
                  :key="tag"
                  class="badge bg-primary me-1"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="text-center">
      <h2 class="mb-4">Contact</h2>
      <p class="text-muted">
        Feel free to reach out via
        <a href="https://github.com/alexsuze" target="_blank" class="text-decoration-none">
          GitHub
        </a>.
      </p>
    </section>
  </div>
</template>
