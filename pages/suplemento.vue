<template>
  <div>
    <Alerta />
    <Top :title="title" />
    <main id="contenido" class="band">
      <div class="container">
        <div ref="pageFocusTarget" class="normativas-container">
          <article
            v-for="suplemento in suplementos"
            :key="suplemento.titulo"
            class="normativa-module"
          >
            <div class="main">
              <h4>
                <a :href="suplemento.enlace" target="_blank">
                  {{ suplemento.titulo }}
                </a>
              </h4>
            </div>
            <div class="extra">
              <small>{{ suplemento.mes }}</small>
            </div>
          </article>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Top from "~/components/Top.vue";
import Alerta from "~/components/Alerta.vue";
import { mapActions } from "vuex";
import mensaje from "~/mixins/mensaje";

export default {
  layout: "app",
  auth: false,
  components: {
    Top,
    Alerta,
  },
  mixins: [mensaje],
  data() {
    return {
      title: "Suplemento Registral",
      suplementos: [],
      suplementosHarcodeados: [
        {
          titulo: "Suplemento Registral Nro. 48",
          enlace:
            // eslint-disable-next-line no-secrets/no-secrets
            "https://cdn.mc-weblink.sg-mktg.com/weblink/MTcxNDk5MzIyMHxkZ2M3aEVDbms1d2lQUHBuRW15VDRJT2N6UnFxd2g4dnlYa1F2QTZKOHBwZDFzd29oRjhLTFFKcWVfeFBvMlRsNHpxVlZEU0F3cm55bThEamMzMGNFMVRfdlkyTTdBT0ZPOXpQZzc3bjdSZjhsa2JKRW1XUThWYUVkVEhuby14N0lXc0YtYmktako2N0xSZUl3c2dYQThXRmJ0XzJCS2pZY3RzaXBCU1hIUzlSMHF6cWxaUFFBQTdjTlRmeC1SOWhMVmx1OVJsT011VnRXcWp3NXFGNk5SZmVVTkJvLXdYbGI2emxVSVVwa3JEVXMyMlpheWFqUHFCLUphUW4zWHh5ak96XzlCWkFNQTV3NGx6X09QZV9UT2dpaHBlbV9iTDRPbTdSOVhPdURTd0VEc3dOSHNZeUd2dm45MnNQdFVBelBBWDBTakVjeXlWSGNYTE9feUs1enBDanFnN185QT09fO2meQ7udIDMU93546vuZFMqMbkH7o9YuHQLEhCpJYBx",
          mes: "Mayo 2024",
        },
        {
          titulo: "Suplemento Registral Nro. 47",
          enlace:
            // eslint-disable-next-line no-secrets/no-secrets
            "https://cdn.mc-weblink.sg-mktg.com/weblink/MTcxMjE0MjAzNnxMUlZFM1hqMUJKT1h4VUg5NDBmYUFuLUF1ckI3TTQtNnkxRWZxbnBkZTkybk9pc1NFYTdMZ2ZrSURrcllFT3hxSjNwRG9OY2FZSThqbHRRSi1uNjZvNkh3Wm12T1NyUlQzakpoYk45VzN5d3pBNnJaVmRhLTBhT2wwQ3BTdk9QSFN2U0R5bE1xM20yVU5PemdYSURwQlZuaDhNWUNwV2htXzU2UzRFTUpiQnNZTWVyanI3MXJoZlctN2k0TDUtRzZYaGQ2d0xEeXd3OGs2UTNpM0dqNllweXJDVTRNM2JxVHNfYXNMaVl0V0pxc3RaZzN6NHRfYzhsalFpTUZHbENUZ1JUQjdxZmdFZmhQaWVHcC1Wdm81cE4tOU5jZEtDR21VZ0phdE9xSjhhdDN1RXNnWm5iLTdKN3Y0Z2RNcG94VmkyWkpsM3FUOGFTOEVXUm0wQUxMQUM2X2NuajF2QT09fHprYqhbwQZq1ki0fSrE1vBTWlaVLESD6Z6BO6CVovEQ",
          mes: "Abril 2024",
        },
        {
          titulo: "Suplemento Registral Nro. 46",
          enlace:
            // eslint-disable-next-line no-secrets/no-secrets
            "https://cdn.mc-weblink.sg-mktg.com/weblink/MTcwOTU1MDA0MXw3LTc3UFdMTGpCU3Bjb01oOXlkbWxJQ1VzNTJPOTloT19BQ0FQSlhIMDFpVUdNWjZ6TVNkc0FXN1NUVHZEbFVGWHBwM1dqOHpGZ1VmS3Z0d1dFOHlDQ1Q0VFZ2cmJwRkUxenR6dzl0aC1iSzcxWl9jREJobVFTeU1iM1k0ZVkzZzdfUzF5RkNpOFZ4VVJWbDdtTXpkOWR6Z3QtMlItbExDczl1Q0xtamxhOE9DakNfRHB5bi1xQUdodm1UbGcxUlhwQjIzLUZpWVlHbXgxM0c5eVR2RXJ1SEtXQzdQWF84dDlyYndieXpKSEljTXgtaGxLUXhnSGVxR0NKNWtnRVN2dURnUnJidy1vV3U1eXI4WVdEbkZQS3dGbkVzTlFJUldGb2JGWklzbEhpQ3BuQnRxbVBadE1kOWl1clFneW53OEFlcjBTQWlCVDZXd0lWQ3BMaWw3cUpEVFA4QnJ2dz09fGK13osiujFBEV2ZjgMjD3jZ9YiXyPvD16lTYiOCjFvP",
          mes: "Marzo 2024",
        },
        {
          mes: "Febrero 2024",
          enlace:
            // eslint-disable-next-line no-secrets/no-secrets
            "https://cdn.mc-weblink.sg-mktg.com/weblink/MTcwNzEzMDgyN3xnUVMxQlR5cWQ5RWxGWEVNZDBnSkF4UTY0b3VncVFqeVVIWUU5SFB5clNNYnZkZWRKR0p3al9iZ0xreHBqMWRsOU9SUmRIcEZ4cGN3Vnc3dVpDdmpXWU13cnhfZWtQOFdlUGdqQ1J6NzNoSl91RGxfcEctS3RuZUpNVXlUOTQwT3NRbFU2ZFBkRVFERGR2XzBXeFNGXzVPQTQxTjFWMFZZRGM0QV9mN3dUVTROa2FkRjBzaEdDR1U2VnN0R1BfbFA1dVIwWGp6Yk5pX3o2OXl5NGxjRVlWWDR4VVo2bjFrbzRTRUpUZnVnRWR3YjRYbFBkdkRBQ243c01NX1MyTUs4N0E1czFnOF84dGVjLVZxUjRNaTF3QXpMRk94N0RyamhhcDgyalFUd0NaZDk5ZnBQRC1Ca2xZbkM2MUVXRFZrZlpZaExFZGJoalVpbHN4MDgzcUg2b2VYNUxGZkpxUT09fP2C9jA_wtJJSmeUZ9NkQU0WHngzdyRQTN9W077G-uhz",
          titulo: "Suplemento Registral Nro. 45",
        },
        {
          mes: "Enero 2024",
          enlace:
            // eslint-disable-next-line no-secrets/no-secrets
            "https://cdn.mc-weblink.sg-mktg.com/weblink/MTcwNDE5MzIyMXxhUk5PTmpWYUZPSmwyWEdVYS1fbGMxODU4cmhwZk9CcENuR1JQcGM0NE8wTHJUMjFUZkloRmc3dklnMGRFRkJfZ3NXODgza21HeTRYbk5DcHdpRm5Lc0lkMFRtUmh6aS1nekxzcldvc3M5VzV2WFpQdE90Z1Z6T1JiaFYxT1dTZHFtcF90TERfcU1QV0JCVzZVWXJXM3NPaDE1dmUwbWxnRkg4Y09xdEN2RjlSa1RoUUc5bXRCNUw3Tk1ManpnTkJzdXB2MXJKS3k5ZVFNQmlGQ2VGcUtqbGV4cmh3RGNvTGlYQjllYlNLeGROekN1UFdMX1RJVnNuOHBXb2dkekZWZFQyaGk1V3M1bmltcVNJa3ppWDNRNlFXRVY2LU5xWFI3b2FDemh0TEd5cmJ0NnloR1hKN19HZEYwS09MVlJzZ1NxZ0FpV01YLWMwN0p3YVFwektvNUtpYUxjZmdFZz09fF5Mryp4Z-fFpE4-siixTmvAbTN6GzvMNLNBlclY48kq",
          titulo: "Suplemento Registral Nro. 44",
        },
        {
          mes: "Diciembre 2023",
          enlace:
            // eslint-disable-next-line no-secrets/no-secrets
            "https://cdn.mc-weblink.sg-mktg.com/weblink/MTcwMTY4Nzk4MXxYWUhidHJrT0tDOVFJT25md3JDa0FmZ3NSNXFCMnlCbnZKRGFNeWt5Q3NBX1ZtbXlfQjVDdGdxVDR5N0c2czlubXJHTHJqdkhCb256NlRucjRMOUpiWHdTTWVrbUl5RUxaME1kWmxTUjBOenoybjNzdjVmcWtsVjZSTng4TlgySDRHeWdDdGM4OVRaSGtsWDNkcnFGMjVvSkdnNko4bVNrNkpNWHhBN1JraHJLTDFGcXFkdkowX0Y3YXh1ZUMzRVlhQUhDanJjZVVIZUpkbWRlS25ub2ZzOWNSVlhVNkw0RmVxdXhMR0x6UkozeWYtemNPTm5kZnpPeVF1ZXBzWWEyd2hmeWQwWjV6Tmw4QU1PZHVkMFpTcDRHUnE2UGR3MVVyRWxXbGlVUC1RVHpiOWhmMVE0ZnRPS0p4UG5fcHptdmVOa1dVeWcxWWRvWV9wb0tGYjJUWEw2c0VYal93QT09fCJH1tVuCtUbHZCMCTL8C4bWZbxTA0lJGiOILt6ieV97",
          titulo: "Suplemento Registral Nro. 43",
        },
        {
          mes: "Noviembre 2023",
          enlace:
            // eslint-disable-next-line no-secrets/no-secrets
            "https://cdn.mc-weblink.sg-mktg.com/weblink/MTY5OTI2ODQxMnxXZnJaNHZaLUNLVk8zb0JLalZtS2FEaFZXakhNYllsX0d4dTRfcEFZeFpaRVJ3RkxqTHBEanV2ci1BSnMtc215d1hKTzhGblBxR2xyMXdWV3c3by1iTmVKVW92WlJPMU1OSDBrQnpQQkFOQ2wtVzdVMGJfRS12bF8weW9weXFBaVdHaDlyaGpGb0lPYWRCUDdmRFFWWWJPRWc2Nm1DZDVyS2ZNcVRXNl9QUFQ2eHNPdTdDYm9JYmhHbGVBa0ctODFya25aNE0wUHV3bTYwU1JfNDFYRUs4a1pXVnNEd0NHdXdPSjJKT3l3elRSMlExbXBTOEtTSTlxemZCdnJ4R1hmeS1TeEw4VWRFaEV4WENTOVlJT3lmbC1lZkVVNVVvTG5LUUozUlRmX2V1Tm9ueWh4d25iSHljbHpHSF9UY2lmYVdib2YyNGNtaUM0NGtVVmdLbExIcDB2Y0Q2cDZfQT09fKhcohaVyGp5Pv5GCukkfQYNPgXcuVxeL1j7RUnny-3K",
          titulo: "Suplemento Registral Nro. 42",
        },
        {
          mes: "Octubre 2023",
          enlace:
            // eslint-disable-next-line no-secrets/no-secrets
            "https://cdn.mc-weblink.sg-mktg.com/weblink/MTY5NjI0NDQyMHxhSnd6aExnS3hpVjB0MjJ2eFRnWFlrUnNfdWJtT3BmSTF5aHhhZnhVdUlPTWp0TVFraXdzU2FKbDBJRElWemdEMlp2bW0yYm1lYWpXeld0Y280THVld0ZHYlROVG9TWXc1R2R3VVVxUURmTllPcmRVUGZaNW90NnlpUlhYci1ONDZETkNMeUJMSnlLdUM4LWk5YVV0Mm1aLWdBbDZlNHliQS1YUVJuNkVWbnN6RVNWYVV2bHRZa0dTT04tbmdLWTlqZW5wWmU2Vnlka0N3WkxoZUxuREhWeENQaFNKcGRvVXV4U2JIaXNBVENqYVYxMnRHY2szcVZ1STdmeWtGZ2h1RUlOX25FTHk5YUlpczNLVzlkVXpPZFFFSXJGVHFNbHpiay0xaEZFeW9PaHU1alczZTN5cllQRW9mZmNNSld3cXlmdzRFLUhUZmlNTFdqWFRFRXB5UmpyVWNBZWxNdz09fEuqouca3JMZLO6RrKSWSeshwhFqhsHECu1X4z-grvbr",
          titulo: "Suplemento Registral Nro. 41",
        },
        {
          mes: "Septiembre 2023",
          enlace:
            // eslint-disable-next-line no-secrets/no-secrets
            "https://cdn.mc-weblink.sg-mktg.com/weblink/MTY5MzgyNTIzM3x0ODY3Q0xUM1dURjJVWXpPdWswczduVnFWbTNuSHVMdVlkaUNfaTFBM0h3dUtRVkN5TjFCS1VFVjNNcGhQS2VsQ3NUcHBCVENIU0tibVp3V1dBOXNUNlNEU2NDaW9WdTdSOGZyTFQ3WUdOczZfRFd0ckdDTzB6amJLM2xMRUFFS24wOWFRQWtuTDlBYXZlSTlFQXFCZGMwQ05pTVZTOUNfNUctNUUzcVBaWVhnZVlEU3hveFpOVWJfRnNISGJVc0dFYV9rZTBHVzV3MC01RDEzY3hvU1ZhZlJhZkxFUHo2aWZRQ3B1RG5ZRGpycnFzSENndXd6SjhVWXdEWGVGQmlMelBBN083aEF0QWlLYzM4ZmVoN2hFTGhkWlZUNlJrTHljZ1hVVDFjSUs1THEyYXZYdzdKSDczMEgyVlFrOHpQU0o4UHhHcEVtY0VUUVd0Rk1QUFMyTDRvOE13OUM2dz09fEUBAXCzRnWbD9jgQ_aadf97Qh3SBMTdXTWX1dfb_z34",
          titulo: "Suplemento Registral Nro. 40",
        },
        {
          mes: "Agosto 2023",
          enlace:
            // eslint-disable-next-line no-secrets/no-secrets
            "https://cdn.mc-weblink.sg-mktg.com/weblink/MTY5MTQwNjE5NHxYZ2k4a0xKWjhzd3NQZ3FzZFhfaThZUnVFZjA5TmFfVW1CSGh3WnJGM1hPZTc2ZmU0TmJkeGo2N0tBLXhLd2hCUHc1ODZMbF9Sb0t0NGs2bVVsYTNUbWJLMHBQMURzcEt3QnVqTW1vRW9CRFhCTG0wQkpGbnJlVEk1ZVFpYzg1LWZNS090dFd3bWI3d3lKWmRQM0hPYVFMVTFSQk1tSXZFRXgyOVdZNDJVYVFBNS1CbjE0d1BLaTFhYnRSOGhLM0V2b19WUVVXVFlDZnhJZXZnUmp5c3BYZDQ2U1FNX0U1dEU1cXBPSG9LUDZhYi1Va1ZkNVFOTWRYblFzU1k3V1ZpbmlHSHBTdV9IeFVlZjJfX0xCYVMtelJkbVB5UW5JYmRUb1VoM3FEZmZubnB4ZUhoYlRLWXp4ZGhPQ1hKeDFPTDFMVG16OFdCUERQOEYta08tZ0lWa0RlWUtoTFJndz09fK3OTCrzMvOUzPT33MHjqni0Wy1J4003bvc9tLsGUAJM",
          titulo: "Suplemento Registral Nro. 39",
        },
        {
          mes: "Julio 2023",
          enlace:
            // eslint-disable-next-line no-secrets/no-secrets
            "https://cdn.mc-weblink.sg-mktg.com/weblink/MTY4ODM4MjAzMHxfSG9ERFhsTXVqSDZsVjFRTzlTRzdFRUZtQkttSmhfRVVHeERCN0VQYl9jTjN5NXBRV0pZOEFKUXRXcXNWclhUQTVWbldycEJYd2FQNzV0blBkaUNmeXhldzZaampvZHFldXhKYkxUR1F5eHdhQkM5SlZSejRYXzE0bUhFcmhqZWpKX2hGQ2lKeXBMLXByNklYY050WEdCVmNTQzZxbVM2VTU1S3FNa1puZzhhUHJNZmhSVUc4ajM4c3lmbUtUYmFMcmszOGIzVzEyZTltZWJ0eElwa0d3QWs5Q2dlWFZIZEFuTnBtc0FBMm9EdVQ2U2x3di1sXzlMQUM2bnIxeVhnU1luRWt0VmZHQTYwc2h6dDRiUTNBMlVBa05BSFVrLXE3d2lZUEdmTzl0cjBLdDNva1p6bng4VUgxZTNNVWNEajQ0eFdyQXJIZjZyT0hWNjYtWjM0ajlQT0FKLXNDdz09fG_hqlihTsc-MfPEpijRyCdPFQq0LVOEezclym2WTA4c",
          titulo: "Suplemento Registral Nro. 38",
        },
        {
          mes: "Junio 2023",
          enlace:
            // eslint-disable-next-line no-secrets/no-secrets
            "https://cdn.mc-weblink.sg-mktg.com/weblink/MTY4NTk2MjgzOHw5NlFIaEhJaFl6WDNxTFpPeWdFYmw4LUhyY05ZaTN2eXRiRTNzQUR5ZnpjdVVBV2JURkotWVpHWVJHVjJKRjVqZ1hQMUhCd1NGRG1qOHFVcWdyd01uT1JPN00yb3Q0cDF6TElOaVdMV1hiSUZURGlTVHRJLWQxaGp1Tnp4QzhCM0p2ZjBOclJ3NHpvdFZsMF9abFlEM2M2VTlyc2pVd3hQa0MtZFdYTWl4dUtNc0ZSY0ZhcGlCVEcwclkwYWVMWXpvUHpLNkE4cjIzclE2cm9PazRvUmJwUVNROFY3Vnl5aW56dXpYanVoMFRuckg0eHdKdl9aWlBrbHRnYlJkRHBQeGNHa0ZjU0kxZzdUZzBWOG9IVnF1SVhTU2FTOUx4WXF5NUFvckJuTEFFQjBKZXozQlQtZEFCXzd3R1VnbU90ZzB5eFpQTFk2SzhxbEdHcmRZMTVXbEFNb0FwejdsZz09fKQoKqwmPcc6R8XjgT4YDMx-kDqPhlJCa5ReDs7pIkW5",
          titulo: "Suplemento Registral Nro. 37",
        },
        {
          mes: "Mayo 2023",
          enlace:
            // eslint-disable-next-line no-secrets/no-secrets
            "https://cdn.mc-weblink.sg-mktg.com/weblink/MTY4MzAyNTI1MHw1eFFWamVDMWY2cVVHaDRKNldzWS1La05KbC1vejFXcTVDeXIyOTZIN0N5bjVFYU9mUHc3ZmpjaGZUcEI1YS1hN282Q3cwSjlMTS0zdl8zbXl1MWFtd29KRFhfNTRadmdXXzJUMWhXelBYWjg3bzduNnd0eVNMM2pWbEtYVTI3XzFfQ0pPeFo0Tzg0bmcwdzJpMm5nellxVXR0WXhBS2d5Z1VSbktCd0tWNGlCSlcwUEJIeHRzNWdvdEc3dTdkMjB3NzZvRFVEeVM5enlMLWppR2p3UFR1WndjSUswQ2UtamhDak9WbkJuTGNiZVRwV09jcHY3NDZWcjFqQldnRTlGejlUczB3ZFZTMkZ2dFVCUENlYjg0NURQbjZObkdmYTNJVWthaHNvZl9vRWFCRlhmTkVMZlZraXJBSmFJMnN0dGlON2hSSWEzR281REVHVjNNZFVvWklxMDV0UDJmdz09fGak5sl5ow-kEW5lSJycXlDdHW86kW8Lou5gpThNxdZ8",
          titulo: "Suplemento Registral Nro. 36",
        },
        {
          mes: "Abril 2023",
          enlace:
            // eslint-disable-next-line no-secrets/no-secrets
            "https://cdn.mc-weblink.sg-mktg.com/weblink/MTY4MDUxOTY0MHxyb3hfU0JZeFlWdVU3V0VHZzlxMGlzODl4SzBOUW13Mi1TMFFpWG12QmdYc2k0Z3NOUGZCbFpjR2tORXExM2xVTlFhVTZmZWZUcUFvNEg2dGVYMVpCRXE3R3BGZEZHUHlnbWwyX084VG94NW1HVzZjVERGRWxWVjU2T0tZdUw2aC1IN01tblNFYXdfbUdfWnRuWWFyNTJEcU82LUdlQzdkNDg1M0c3STM0VFFOMkJFYzVEdC1XZTR0NlVzSk1mWVJYcDVKRXpMVV9YeWswdjJwNGNmdlFsZ0ViMHp2MTl0TkNtUWppQzdKdlBxejdndUVPc2VJUURIeWxHQm9Lclh5NkRZTGRIVHp4T1lDaVFKQjJpU3lwblA3b1lMR0dCTnZ3SDJtRV9paE45YVdCMTM5cFdrbWtwWmk5TnZ5dFoxaTFKdVRUdXl0ekdoXy1xVjU2SGhrWXR5YVduRlo0UT09fMUfcv4GyW7cpregRlCQrCR5lasK1VE4RF_WqC1E74w2",
          titulo: "Suplemento Registral Nro. 35",
        },
        {
          mes: "Marzo 2023",
          enlace:
            // eslint-disable-next-line no-secrets/no-secrets
            "https://bit.ly/fucernet-suplemento-34",
          titulo: "Suplemento Registral Nro. 34",
        },
        {
          mes: "Febrero 2023",
          enlace:
            // eslint-disable-next-line no-secrets/no-secrets
            "https://bit.ly/fucernet-suplemento-33",
          titulo: "Suplemento Registral Nro. 33",
        },
        {
          mes: "Enero 2023",
          enlace:
            // eslint-disable-next-line no-secrets/no-secrets
            "https://bit.ly/fucernet-suplemento-32",
          titulo: "Suplemento Registral Nro. 32",
        },
        {
          mes: "Diciembre 2022",
          enlace:
            // eslint-disable-next-line no-secrets/no-secrets
            "https://bit.ly/fucernet-suplemento-31",
          titulo: "Suplemento Registral Nro. 31",
        },
        {
          mes: "Noviembre 2022",
          enlace:
            // eslint-disable-next-line no-secrets/no-secrets
            "https://cdn.mc-weblink.sg-mktg.com/weblink/MTY2NzkxNDMzMnxDNzVHSzhEazNNMkwxRnR0VEI4TEw0WGw4QzNRMGpGQWNzdE9RNjVRQ1gzeUJfYjBnQU9ZV01jMm5QR2g5emRSRGl0anNlX3AxblFIWTdmQlktXzVuS0VwYlk2bkdfUWw4S3pnNDktX3N0UEFfWldlSXo1eE53Y0xmMU1kMk9vY3J0ZGs5djJHSlNnUWZReXU1VWRGUEVxWG5pZExfTEwzSXhQU2wzM3djR0NSYlhIMng4ZjRZV3NYOG43dmZGTVVoS1duY0ZHU2lyWlA2aENKaXBxUTRUMTZfZEw0VHNSR1NsZUlRX2pKXzRHclk3T1pqMG1nbGMzTlJBYmVfRkJja1RrSDg5VjZiTEVISU1WaEdzejU4RHVvbFZGeF91bnlCT3dWUk00R1RZazhRYjI5U2lrWGozSWNucTRVVWpYNFBhSnlYcUZkVVhGR2ZqWnNlR3VFbkxIenhlSERhZz09fHlXR5RpDMMFFZdCs-hTiuI7UJ-F3aPXeaI23c5EvPBl",
          titulo: "Suplemento Registral Nro. 30",
        },
        {
          mes: "Octubre 2022",
          enlace:
            // eslint-disable-next-line no-secrets/no-secrets
            "https://bit.ly/fucernet-suplemento-29",
          titulo: "Suplemento Registral Nro. 29",
        },
        {
          mes: "Septiembre 2022",
          enlace:
            // eslint-disable-next-line no-secrets/no-secrets
            "https://bit.ly/fucernet-suplemento-28",
          titulo: "Suplemento Registral Nro. 28",
        },
        {
          mes: "Agosto 2022",
          enlace:
            // eslint-disable-next-line no-secrets/no-secrets
            "https://cdn.mc-weblink.sg-mktg.com/weblink/MTY2MDgyODU3MnxDaU83clpDc3JfQjFSOUpqZHRMMmJzYzJUdmExcm9tQzhhMFpQM2NBS2RWRGNyemp1WGFycTFQbnM0Q2lUT3gwb3pSZ1Q0cnJmaHdiOXY0Nm1TZW9iaWh5Z1NTQjBfaHZFUFF4UUJndzJIbkVBTlBFOVJtUk5FNnA3bW1vRko5bjhTczB6RE9xeGhkbUprQXFRRU11V2ZuTjJqRF9KQVlOb3VaazRibWdUSDR6QzBxaEFZVE16Mm5uQWVGVnFmSHE4eERnY0xlRVByMzJBZWFXb09aZXdHT0EteklYSEk4eFB5TjZaNEJQUC1vSXBwVEJDOXM1ZWg5bTRMZUlCekQ2UnVPa1Q0MHMxdXZ3VjNLME9jTWNnYTlaYXo3R0E1ZGJ3WnktRFVVd29iSmdvTWVUemdJT0xlODZQY1VsYW5TeU5ud0F1TE9tWVhmaE5LUVpjeUxPSUUzS2hQRzlZQT09fBKhAKxG-Vczoy7ktUt8YnLjBjP5dw7kJjYP8NXnQ27T",
          titulo: "Suplemento Registral Nro. 27",
        },
        {
          mes: "Julio 2022",
          enlace:
            // eslint-disable-next-line no-secrets/no-secrets
            "https://bit.ly/fucernet-suplemento-26",
          titulo: "Suplemento Registral Nro. 26",
        },
        {
          mes: "Junio 2022",
          enlace:
            // eslint-disable-next-line no-secrets/no-secrets
            "https://bit.ly/fucernet-suplemento-25",
          titulo: "Suplemento Registral Nro. 25",
        },
        {
          mes: "Mayo 2022",
          enlace:
            // eslint-disable-next-line no-secrets/no-secrets
            "https://bit.ly/fucernet-suplemento-24",
          titulo: "Suplemento Registral Nro. 24",
        },
        {
          mes: "Abril 2022",
          enlace:
            // eslint-disable-next-line no-secrets/no-secrets
            "https://bit.ly/fucernet-suplemento-23",
          titulo: "Suplemento Registral Nro. 23",
        },
        {
          mes: "Marzo 2022",
          enlace:
            // eslint-disable-next-line no-secrets/no-secrets
            "https://bit.ly/fucernet-suplemento-22",
          titulo: "Suplemento Registral Nro. 22",
        },
        {
          mes: "Febrero 2022",
          enlace:
            // eslint-disable-next-line no-secrets/no-secrets
            "https://bit.ly/fucernet-suplemento-21",
          titulo: "Suplemento Registral Nro. 21",
        },
        {
          mes: "Enero 2022",
          enlace:
            // eslint-disable-next-line no-secrets/no-secrets
            "https://bit.ly/fucernet-suplemento-20",
          titulo: "Suplemento Registral Nro. 20",
        },
        {
          mes: "Diciembre 2021",
          enlace:
            // eslint-disable-next-line no-secrets/no-secrets
            "https://bit.ly/fucernet-suplemento-19",
          titulo: "Suplemento Registral Nro. 19",
        },
        {
          mes: "Noviembre 2021",
          enlace:
            // eslint-disable-next-line no-secrets/no-secrets
            "https://bit.ly/fucernet-suplemento-18",
          titulo: "Suplemento Registral Nro. 18",
        },
        {
          mes: "Octubre 2021",
          enlace:
            // eslint-disable-next-line no-secrets/no-secrets
            "https://bit.ly/fucernet-suplemento-17",
          titulo: "Suplemento Registral Nro. 17",
        },
        {
          mes: "Septiembre 2021",
          enlace:
            // eslint-disable-next-line no-secrets/no-secrets
            "https://bit.ly/fucernet-suplemento-16",
          titulo: "Suplemento Registral Nro. 16",
        },
        {
          mes: "Agosto 2021",
          enlace:
            // eslint-disable-next-line no-secrets/no-secrets
            "https://mailchi.mp/4cd24cc89342/suplemento-registral-fucernet-5535861",
          titulo: "Suplemento Registral Nro. 15",
        },
        {
          mes: "Julio 2021",
          enlace:
            // eslint-disable-next-line no-secrets/no-secrets
            "https://mailchi.mp/a8f122bf5aaa/suplemento-registral-fucernet-5533373?e=4e780d1ef6",
          titulo: "Suplemento Registral Nro. 14",
        },
        {
          mes: "Junio 2021",
          enlace:
            // eslint-disable-next-line no-secrets/no-secrets
            "https://mailchi.mp/ccb11eba3017/suplemento-registral-fucernet-5530813",
          titulo: "Suplemento Registral Nro. 13",
        },
        {
          mes: "Mayo 2021",
          enlace:
            // eslint-disable-next-line no-secrets/no-secrets
            "https://mailchi.mp/a908bab1e358/suplemento-registral-fucernet-5527737",
          titulo: "Suplemento Registral Nro. 12",
        },
        {
          mes: "Abril 2021",
          enlace:
            // eslint-disable-next-line no-secrets/no-secrets
            "https://mailchi.mp/2097e02114c3/suplemento-registral-fucernet-11",
          titulo: "Suplemento Registral Nro. 11",
        },
        {
          mes: "Marzo 2021",
          enlace:
            // eslint-disable-next-line no-secrets/no-secrets
            "https://mailchi.mp/4c290b32aab3/suplemento-registral-fucernet-1446509",
          titulo: "Suplemento Registral Nro. 10",
        },
        {
          mes: "Febrero 2021",
          enlace:
            // eslint-disable-next-line no-secrets/no-secrets
            "https://mailchi.mp/ffff5a5be2b1/suplemento-registral-fucernet-1442053",
          titulo: "Suplemento Registral Nro. 9",
        },
        {
          mes: "Enero 2021",
          enlace:
            // eslint-disable-next-line no-secrets/no-secrets
            "https://mailchi.mp/57076fc7917b/suplemento-registral-fucernet-1437645",
          titulo: "Suplemento Registral Nro. 8",
        },
        {
          mes: "Diciembre 2020",
          enlace:
            // eslint-disable-next-line no-secrets/no-secrets
            "https://mailchi.mp/32734d9eecba/suplemento-registral-fucernet-1433885",
          titulo: "Suplemento Registral Nro. 7",
        },
        {
          mes: "Noviembre 2020",
          enlace:
            // eslint-disable-next-line no-secrets/no-secrets
            "https://mailchi.mp/ce04acf5b705/suplemento-registral-fucernet-1427873",
          titulo: "Suplemento Registral Nro. 6",
        },
        {
          mes: "Octubre 2020",
          enlace:
            // eslint-disable-next-line no-secrets/no-secrets
            "https://mailchi.mp/7b2d16ad0e57/suplemento-registral-fucernet-1423553",
          titulo: "Suplemento Registral Nro. 5",
        },
        {
          mes: "Septiembre 2020",
          enlace:
            // eslint-disable-next-line no-secrets/no-secrets
            "https://mailchi.mp/4a67d2c33823/suplemento-registral-fucernet-1418633",
          titulo: "Suplemento Registral Nro. 4",
        },
        {
          mes: "Agosto 2020",
          enlace:
            // eslint-disable-next-line no-secrets/no-secrets
            "https://mailchi.mp/6a047cb47e87/suplemento-registral-fucernet-1413805?e=4e780d1ef6",
          titulo: "Suplemento Registral Nro. 3",
        },
        {
          mes: "Julio 2020",
          enlace:
            // eslint-disable-next-line no-secrets/no-secrets
            "https://mailchi.mp/848c1b889499/suplemento-registral-fucernet-1408397?e=4e780d1ef6",
          titulo: "Suplemento Registral Nro. 2",
        },
        {
          mes: "Junio 2020",
          enlace:
            // eslint-disable-next-line no-secrets/no-secrets
            "https://mailchi.mp/41711b1ab3dd/suplemento-registral-fucernet?e=4e780d1ef6",
          titulo: "Suplemento Registral Nro. 1",
        },
      ],
    };
  },

  async created() {
    await this.obtenerSuplementos();
  },

  methods: {
    ...mapActions(["setPaginaCargando"]),
    async obtenerSuplementos() {
      this.setPaginaCargando(true);
      try {
        const data = await this.$axios.$get("suplementos");
        this.suplementos = [...data, ...this.suplementosHarcodeados];
      } catch (e) {
        this.setMensaje(e, "error", 5000);
      }
      this.setPaginaCargando(false);
    },
  },

  beforeRouteEnter(to, from, next) {
    next((vm) => {
      if (!process.client) return;
      vm.$announcer.set(
        `${vm.title} ${vm.$announcer.options.complementRoute}`,
        vm.$announcer.options.politeness
      );
      vm.$utils.moveFocus(vm.$refs.pageFocusTarget);
    });
  },

  head() {
    return {
      title: this.title,
    };
  },
};
</script>
