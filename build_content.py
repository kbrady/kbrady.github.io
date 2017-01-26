# A script to turn everything into static html
import os

for filename in os.listdir('.'):
	if filename.endswith('.html'):
		os.remove(filename)

for filename in os.listdir('content'):
	with open(filename, 'w') as output_file:
		# add the header
		with open('templates'+os.sep+'header.html', 'r') as header_file:
			for line in header_file:
				output_file.write(line)
		# add the body
		with open('content'+os.sep+filename, 'r') as content_file:
			for line in content_file:
				output_file.write(line)
		# add the footer
		with open('templates'+os.sep+'footer.html', 'r') as footer_file:
			for line in footer_file:
				output_file.write(line)

