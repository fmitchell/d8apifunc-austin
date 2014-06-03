#Phase2 Reveal.js theme

##Usage

- Move this folder to the root of your reveal.js presentation (/path/to/your/pres/phase2).
- In your index.html file, add the theme style (phase2/phase2.css).
- In the plugins array, add the branding js to the list of dependencies plugins.

        {
          ...

          { src: 'phase2/branding.js', async: true, condition: function() {return !!document.body.classList; }},

          ...
        }

- Profit!