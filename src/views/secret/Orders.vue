<template>
  <section class="section">
    <h1 class="title">
      Megrendelések
    </h1>
    <div>
      <editor-content :editor="editor" />
    </div>
  </section>
</template>

<script>
import { Editor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'

export default {
  components: {
    EditorContent
  },

  props: {
    modelValue: {
      type: String,
      default: 'mjhgvfcd'
    }
  },

  data () {
    return {
      editor: null
    }
  },

  watch: {
    modelValue (value) {
      const isSame = this.editor.getHTML() === value

      if (isSame) {
        return
      }

      this.editor.commands.setContent(this.modelValue, false)
    }
  },

  mounted () {
    this.editor = new Editor({
      content: this.modelValue,
      extensions: [
        StarterKit
      ],
      onUpdate: () => {
        this.$emit('update:modelValue', this.editor.getHTML())
      }
    })
  },

  beforeUnmount () {
    this.editor.destroy()
  }
}
</script>
