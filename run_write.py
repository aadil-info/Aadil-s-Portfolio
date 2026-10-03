content = open('src/components/ContactSection.jsx.template', 'r', encoding='utf-8').read()
open('src/components/ContactSection.jsx', 'w', encoding='utf-8').write(content)
print('Done! Lines:', content.count(chr(10)))
