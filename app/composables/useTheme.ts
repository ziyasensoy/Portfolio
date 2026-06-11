export const useTheme = () => {
    const theme = useState<'light' | 'dark'>('theme', () => 'dark')
  
    const icon = computed(() => {
      return theme.value === 'dark' ? 'uil-sun' : 'uil-moon'
    })
  
    const toggleTheme = () => {
      theme.value = theme.value === 'dark' ? 'light' : 'dark'

      if (!import.meta.client) {
        return
      }

      document.body.classList.toggle('dark-theme', theme.value === 'dark')
      localStorage.setItem('theme', theme.value)
    }

    const initTheme = () => {
      if (!import.meta.client) {
        return
      }

      const saved = localStorage.getItem('theme') as 'light' | 'dark' | null

      if (saved) {
        theme.value = saved
        document.body.classList.toggle('dark-theme', saved === 'dark')
      }
    }
  
    return {
      theme,
      icon,
      toggleTheme,
      initTheme
    }
  }