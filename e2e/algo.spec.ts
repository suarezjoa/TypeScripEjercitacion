import { test, expect } from '@playwright/test';
import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    video: {
      mode: 'on-first-retry', 
      size: { width: 640, height: 480 }
    }
  }
});
test('has title', async ({page}) => {

  await page.goto('https://sistemacuenca.ucp.edu.ar/alumnosnotas/');

  await page.getByLabel('Usuario').fill('44198040');
  await page.getByLabel('Contraseña').fill('covid2020');
  await page.getByRole('button', { name: 'ctl00$ContentPlaceHolder1$ImageButton1' }).click();

  expect(page).toHaveURL('https://sistemacuenca.ucp.edu.ar/alumnosnotas/Proteccion/Inicio.aspx');

});
