import type { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";
import { VerseText, VerseBody, Verses, Verse } from ".";

type VerseTextProps = ComponentProps<typeof VerseText>;

const meta: Meta<VerseTextProps> = {
  component: VerseText,
  title: "Verse/Verse Body/VerseText",
  argTypes: {
    text: {
      control: "text",
      description: "The text of the verse",
    },
  },
};

export default meta;

type Story = StoryObj<VerseTextProps>;

export const VerseTextIsolated: Story = {
  name: "VerseText Isolated",
  args: {
    text: "Bienaventurado el varón que no anduvo en consejo de malos,\nni estuvo en camino de pecadores,\nni en silla de escarnecedores se ha sentado;",
  },
  render: (args) => <VerseText {...args} />,
};

export const VerseTextIntegreated: Story = {
  name: "VerseText Integrated",
  render: () => (
    <Verses
      paragraphs={[
        {
          title: "Genealogía de Jesucristo",
          verses: [
            {
              text: "Libro de la genealogía de Jesucristo, hijo de David, hijo de Abraham.",
              number: 1,
            },
            {
              text: "Abraham engendró a Isaac, Isaac a Jacob, y Jacob a Judá y a sus hermanos.",
              number: 2,
            },
            {
              text: "Judá engendró de Tamar a Fares y a Zara, Fares a Esrom, y Esrom a Aram.",
              number: 3,
            },
            {
              text: "Aram engendró a Aminadab, Aminadab a Naasón, y Naasón a Salmón.",
              number: 4,
            },
            {
              text: "Salmón engendró de Rahab a Booz, Booz engendró de Rut a Obed, y Obed a Isaí.",
              number: 5,
            },
            {
              text: "Isaí engendró al rey David, y el rey David engendró a Salomón de la que fue mujer de Urías.",
              number: 6,
            },
            {
              text: "Salomón engendró a Roboam, Roboam a Abías, y Abías a Asa.",
              number: 7,
            },
            {
              text: "Asa engendró a Josafat, Josafat a Joram, y Joram a Uzías.",
              number: 8,
            },
            {
              text: "Uzías engendró a Jotam, Jotam a Acaz, y Acaz a Ezequías.",
              number: 9,
            },
            {
              text: "Ezequías engendró a Manasés, Manasés a Amón, y Amón a Josías.",
              number: 10,
            },
            {
              text: "Josías engendró a Jeconías y a sus hermanos, en el tiempo de la deportación a Babilonia. @",
              number: 11,
              reference: 1,
            },
            {
              text: "Después de la deportación a Babilonia, Jeconías engendró a Salatiel, y Salatiel a Zorobabel.",
              number: 12,
            },
            {
              text: "Zorobabel engendró a Abiud, Abiud a Eliaquim, y Eliaquim a Azor.",
              number: 13,
            },
            {
              text: "Azor engendró a Sadoc, Sadoc a Aquim, y Aquim a Eliud.",
              number: 14,
            },
            {
              text: "Eliud engendró a Eleazar, Eleazar a Matán, Matán a Jacob;",
              number: 15,
            },
            {
              text: "y Jacob engendró a José, marido de María, de la cual nació Jesús, llamado el Cristo.",
              number: 16,
            },
            {
              text: "De manera que todas las generaciones desde Abraham hasta David son catorce; desde David hasta la deportación a Babilonia, catorce; y desde la deportación a Babilonia hasta Cristo, catorce.",
              number: 17,
            },
          ],
        },
        {
          title: "Nacimiento de Jesucristo",
          subTitle: "Lc 2:1-7",
          verses: [
            {
              text: "El nacimiento de Jesucristo fue así: Estando desposada María su madre con José @, antes que se juntasen, se halló que había concebido del Espíritu Santo.",
              number: 18,
              reference: 2,
            },
            {
              text: "José su marido, como era justo, y no quería infamarla, quiso dejarla secretamente.",
              number: 19,
            },
            {
              text: "Y pensando él en esto, he aquí un ángel del Señor le apareció en sueños y le dijo: José, hijo de David, no temas recibir a María tu mujer, porque lo que en ella es engendrado, del Espíritu Santo es.",
              number: 20,
            },
            {
              text: "Y dará a luz un hijo, y llamarás su nombre @ JESÚS, porque él salvará a su pueblo de sus pecados. @",
              number: 21,
              reference: [3, 4],
            },
            {
              text: "Todo esto aconteció para que se cumpliese lo dicho por el Señor por medio del profeta, cuando dijo:\n",
              number: 22,
            },
            {
              text: "He aquí, una virgen concebirá y dará a luz un hijo\n, y llamarán su nombre Emanuel, @ que traducido es: Dios con nosotros.",
              number: 23,
              prophecy: true,
              reference: 5,
            },
            {
              text: "Despertando José del sueño, hizo como el ángel del Señor le había mandado, y recibió a su mujer;",
              number: 24,
            },
            {
              text: "y no la conoció hasta que dio a luz a su hijo primogénito; y le puso por nombre JESÚS. @",
              number: 25,
              reference: 6,
            },
          ],
        },
      ]}
    >
      <Verse>
        <VerseBody>
          <VerseText />
        </VerseBody>
      </Verse>
    </Verses>
  ),
};
