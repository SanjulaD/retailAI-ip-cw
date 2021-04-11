import React from 'react'
import {
  CBadge,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CImg
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

const TheHeaderDropdown = () => {
  return (
    <CDropdown
      inNav
      className="c-header-nav-items mx-2"
      direction="down"
    >
      <CDropdownToggle className="c-header-nav-link" caret={false}>
        <div className="c-avatar">
          <CImg
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABJlBMVEV+gnv///8As5QAvJz/4KhbSUb/6bj5+fn0z5P/5rIAuZnj7O1/hH18gHn/4qn/67mBgXpWREOMkIl5fnrx8vHd3tyFiYLgwo/Awr/R0s+qrajs7OvHycZUQkL/5aq0qY2anZe3ubV4eHJnXFieoZzV19RfUE1yb2m5u7j/8b3l5uSVmJNtZ2L5152Gfnl3hHx+aFvx1aFwXFK6oH6GcmOSkIGem4noz53s269OmIZqin8cqY/J8Onu+/md4tXd9vLNs4utlHfWvZGeh212YVWPeGXMuJXdx6DFupvGsY+okHSahnHUuY62oYVALzeqooq7spf/7cft4s/78uR0v7EslYFWj4Ft28v87dFVlIRKz7k7p5A+v6ax6N9fyLPH5uSC08ObubFQAe0xAAAQ+UlEQVR4nM2diXbTuhaG7SStIbXdjD7NSAMdIOlA2kA6twwdGHqBw6VAJ3rf/yWu5EyeJEva27T/WofFSg+Ovm5pD5IsaXriMoxSrb1YmavOd0zNVWG+OldZLNdKhpH812sJPpuQlQnYQsGxnlqWpflkkc8cgvq8kjBpQoQGsVq9tVDQXDBTY4ugO9Sk7VpClEkQ1soUzrQsk8vm49QKC616OQlKdMJ2pbXQMa14qDClWVio1svYkLiE7Xq142gqeCNTOp2FOVxIRMJSnfgUAN5IxP/M1fCahUVoLC6IjjkhdSolpJahEBrtuQLcdn5ZTquN0lsRCEvlloPNR2RaZrWC0FvBhLVK1bFQO6iXcaEOZgQS1urVJOzn0cJc+x4Jifd0EsWjMuefg+wIIazMJ89H5XTmAD5HnbDcSWb0RcksVP46YbuakHthyFpQzXTUCGtzhb+J5yKS+PjXCLHzF1F16ip5jgJhrYWewAjKqSqYUZ5wceF+8KisTl16NMoSlu7NgAM5VdngKEnYnr9PPFedxQQJjXrCKZqYWlIOR4awVH0IfDQ2yvRUCcL2wsMApA5nUdzhCBMalc59g3lUEM9URQmNv5/FcOUID0ZBQqP1d8oIcZmiYUOM0KjeN1CE5sUQhQhLnYfiY3xyhHI4EcLaQ/IxHplOGYew/UABaWEskN/EE5bn7xuEI4HaP5bwQQOKIMYR4qXaZkBIj43tqDGEtXmERrg81tPl5ZVnA62sLD99qiFRFmLcDZ+wBHYydJHUerrybGkqTzQ1NTX8g/y59GwZBTMmaHAJDbgXpXQDqrDIx5TS4i+DCyByQz+P0IBWSwSP2C6Sbkw5MCVM3OyGQ2i0IN9qatR6YlpaWYbNvlY5aTibkBT0AD6Tmk9cxJAWYESanEqDTbgIKJdMS4rP1bNlAKLDrheZhIBczdSWpflcxqcARGZYZBGWlGdFSQcVHX8B5adWlAm1AitmMAiNlrobXY5xnzxGdTNa84yhyCCsqwKalqIBh1paVg2OVkuGsO0ofo1yD51oWdmK0Ul4JKHyIEQAnFIfjNFDMZLwuTKgkg8NIyqasRoVMqIIVSMhdAyOtaz2/SQqihHWVOe2sQCnllQT1U5EJRUmVE9HV5AA1RGtiAQ1TKicreEMwoFUvY1ZjydUX2DC6qOulPtpyJ+GCOvKkRATcOqZctwP+tMgYU21j5qoJiRGVP1NB51NkFB5gQJkwkYj3/Ans3lVI2odPmFbOR9dUU63CeDLo/7RUsP32ZJiQzSrziVU3qtmqjvS/NQbu2k3uxv+35FyfuoYHMKK4kMhfia/tNm0M5lM862/6lLupmaLTWjMKz9VOdo3No6aGVfNN75+uqQ8OeXPwH2E6nNPqp403+i9HQJm7P5LnxGVi2G/Eb2E6jMXmqU2DPNT7/p2ZiR700eoPBD9Yd9LCDChWsbW2NjsTgCJEd97EVeUCc3n0YSADUHmsgpf47hvewAzduajl/CZ+lTRfDuSsKI+A6zgaBr595+bzYxPzaMlD+KS+uSiNRdFCNrTJUeYz09tHB9lAnxBXwMg9K5kTAjLABNK1BV0YW2j9+ZtpmkHAUk3feclVHc1mlYJE0JmSMWq+3yepJ+E7t3m264dwUe76ab3H0AIF0ohQuWiIpYwT9EI3NJG79P5yWm/24zGo4SfvambujMlKocIleeAtVCwcIEmctE+Eratrenp2VnbZvEF4wVgjl/TqiFCyHJvgHDpJVXv+BPh+nBySsi2Zoeann7MxKOE3R6WDc1SgLAMWe71E+bPZ18QmBcDDcGm6X9UfMLMMRbhOGCMCEFb83yE+Y3TF9NsyRBC2qQV/IQGaHOln7C39SAIrbaPULkwjCD8NO6R8oQBTwNa3G/5CGH7R/EIN70DGkjYMTyEoGAY7qWqhHb3k6+4ADVqtPA9IAQk3WHCl6fKhP0eTvk0aFXLQwjc5IxmQ3+VD7ShNcjcXMIacJezj7DxCdBLjxEJh9sWXcIK9E0Db16a/8jhiyH01RagzJvKnBsTPofuDySEkznrc1445PtST21BngcltNw1YUoIfp+J1IeN3vn5wIQbJwDCt4PaIt/bfLeUhxIOJjMoIXyrurVyvjW71Wu4rpQ7DPmEGXsQLvJHze7nHpjQjRcaPFbQt5DPSFk07c7okoCvPA5pgTjoB31SY/W/FKHtmhsSzkHfFyme0fJh9oPbug/cThpnwwxN2xo9OsnY7L+C7m+li94awjAsvnY75uwpnSnb4ObdcYSZ5kfSERrv3GlU+wTWrsHUsIYxDM/ckTd7Sn7/jR4fMJbwMyV8404D2GAj0pdqNNAkmyvLGaRprqtp8GNFLKHdncpP5TeHMx1foN207hJWoI95tTUkPCaE3PI3njDTfEmMeDQAtJ9Am9YyCKHxHPqY1yPCT6Rx/FghQPixkV/6PCBsggciSU014miATyl+GRSEs9Mf8433L6CER438xlsswoJLCHU0I8Lp6fN84zimk8YS2v1G4/2I8BSamZptQqi8lzRIOEsJ4xxNPGFmo/GyP7IhOGFeJISL4Hj/emjD2fN4RxNLmLF7jV6/idRLSVajgSa7B08ZeprpFx/yjThHE0/YfPefXh9rHGpVQgh1peNoMT170juO4RMhPHr5posULTRzwdCgMxiTiE/6Kl2ZAPfSbr87/FsGnHtrBUMz5sGE5tmoa87G9VEBwsx45c3uvga/Q+6UNAN+VoL1lTtDKks46a+n0LyUtK2mlaDBYlxboBPCawtCWNZq8MMExgMRmRBhGJKAqCnvRvQ+5ky8m4oTkuIJgbCugRYOh5LpphI2ROikJCBq4JRGo8f/indTYULiSeEm1LR5DVoduhonbpiEJyjHjTgaeBrKVfEsLh+VJbS7CKPQFeh15rEsLWYCSpbQbiI40oGQTtCzzK1ZgYxGlNC20QA1rNODLOdMICsVI+x2T1G8zEBopyAWrVevvqLkpaevX2l4gMSboqlYdOLjYnxtYT8pFjFPbUI9ybJ4hkCI5kSHQj3Fq/gK3kvtE1xAXBtqxdigEV/jIzoZVzjxcKTiFyhhs48MiJTTjGQVwXPeeIFwKJS8dKLiV+jKDMINGV45KLWFR+OJN0XC5hNkE86j1IdeWTEBI2YNuAufmvGrilLjexVnxJh1/K/YzaljzNMExDcif7cJeNU3KGsRY64t8Ey+Ebl7ouCT3KHWlDHmS4MP5ebfXEKECdJgY2oIc95BFbmTizzCLnTdPiynhLBuEdJkyVSS8FTpri+uCgbC2lNIFi9isAmRJtd8cteewOuHYfGcDYcQO9hTVTHWgCNUfM3M3ZiEzVPUuncgdw0YvI4fJfbsIovQzjgJmNBdx4ef4Bn1ZI21oM8gtG38QTjaiwHeTxMp5lBkEX5IAHC4nwa8Jypa1pdoxGhC+ySJPjrcEwXe18ZS9MpwFKGdQDLjarCvDbw3kfV0MzJ7iyTEWCmMbEMdaX8p4/GRVUYEYTMpwNH+0sSuHrGsr+F9fGHC5ABHe4Th+7yZKj4JjcUQYfMUcwrfp9E+b/hefbaKobEYJLS7ZlKAk736CV4NUHyy+phPuPpPcjdLjN+3SPAOIEK4muEQrq4++iep7/a8MwN/74mp4pPm6iOfGX2Eq48eJUg4ee8J/u4aU4SQYhDGiLfVKV+ShJ5316DvH7JFCV0Syjg7IbRHfEkSet4/TGAmYyiXMJNxUVYzj0eEqyO8JAm975AmFy+GhGODrXrZEib0vQcMfJebrRFhJgSWPKHvXe7EuumYkI2YGKHvfXzgmQpsTQiZjIkR+s9UgJ2LwZaXkIGYFGHgXIykuqmPMJoxKcLA2Saw82nYslrfAmloiPDfZO7FDJ1PAzpjiPM9dX06mGr7AX8ZyVzdGjpjKImpb40ubunfQxWhl/GboSdzNWb4nKhkQqJZ040w4oTxW8nQq9CLdCIVPusLdF4bS5ZjEH0PdtRx3vaL/FSfS4Iw4ry2BKbccrm1ju4ifgsjEsjuv/SHemV5LYf91VFn7mHXwbm1tfWd7f+6hNFmJD3UJfzz42Kd/N+YXx59biJi+k3aa+1s76bS2Z9DQsL4ywv5+Nuv0Q+Mw2wqtUso1/BMGX32JY4Rc0TrO7+vUmmq7MGY0KX8/ovq+3fDp3QqlcpmU7vbO+v038MbwTq/FHAG7QRvfefix242PVSAkGqmFPzEJRxCXv12KYHtYJ1BCzlHeIT3+2qCRwkvg4QzM0FE/SY1EemwV9tgSOY5whAj5tbMne2rlBfP1Z4eBAwi6pepoK62ie9Rh2SfBa1+nvdaLhIv7XU1VCWXcMYHeBgCpCKD0lL1PJzzvNXKxNyadRGJR3V9GAb0Iep3kYSuJdeVGHlnsqucq59bW9/ejaZz5fE1Y0Av4v41i5BC7ijESe65+rJ3I5DBsnPFsN6wm97uRwBOhqJ+wAEkjmf397rkgIy5G0GqEibO84LPR3UzMuLMTATi/i2P0GXcJq5VolUx91tIlBhifOn03X7YhDMztYhQwRLxOuJ2jL2jRPiemVxOiC+dvd5zbXVzczhTqw3oaqWZPzfuxwbTzwQY1wUR4++ZEc3d1naGiVm8DlyS9PXt3cHNH1c3B3fXqes/pPvu8fyMV1cXYmYUuCtI6L4nYkCe//Qb8fKQ+JO0a+/rgQaNvt7XDa6f8euHiBlF7nsSubMrZwp10JH29Jv0JFWdtPlSj/MzPu3uxCKK3dkVf+9abl3YgC7Tz70JoJcw9XNPApDoIg5R7N612H6a25ECdLE8f/U2OS1HmNrmI4renRdz/6GkBUOwklAyVhS+/5BfRuWuIIBAwhRvLErcYcnbc5rbkXEy6IQ/2IQy95Dy5ofXYCaEErIdqtxdsuzZ09y6aKBPhjD1m1FsyN4HzByKaxewTgomvGKYUPZOZ+ZGKaCfgRMyuqn8vdyMTTbAUIFAGB0wVO5W142oeancDnAYwgmjor7ZYgxCLmFkgpr7DRyGcMKriAw8Ih0VIdSNcCGV2wYCwgkjBqJnlUKOUDeC3ia3DnU0cMJwWuPwAPmEobdNFJJufMLfAUKHFSdECPXafIAQ6mgQCLf9gIWIikmCUG/7EOGOBoHQ72oKzEAoSKiXfYhgR4NA6HM1heh0W4bQi4jgaBAIva4mHlCA0JO/wTMaFMJxVmPGdlExQr02QkRwNBiEo6zGdGKcjDAhCRrWkBDsaBAIsz/EwoQMIcluhq4UDIhhw93BBAQ3k5ElJDkqTcPhORsO4TrtolUxQFFC3ZijxRTclWIQUmfqcKoJNULdqHQ0BFeKQniRK7DrQWVCEjUWoHM0SITZ7c6iMKAMoV76HxwQxYa3gkNQmlA3Dh4CYfbnvkyjpQh1fe/yvgmz6Ru5JksS6vs/75cwe3so2WJZQl2/gZkRRnh9INVD1Qj1Q5AZIYTZ2z355ioQ6vsQMwIIFQyoSEjMqO5UlQmzd7IjEEIIcKqqhNd74kEehZAw/kXCbPpAuZ3qhLp+oGJHBcLs9Z3KAEQg1PcVGKUJCZ/aAMQgpC5HllGW8PpOIUIgEhJGydAhRZi9PADZD4WQMO7JpAAShNnLGzAfCiEZj4d32IRZUkLsAfzLRCiERIZoZxUizCrmL1HCItRFvU48YTYN9i5eIRIS7R3cxlHGEGavb+9weudIuIQ6hbzjQvII05d3B7h4egKEOnWuHEoWIaW7OcTG05Mh1Kl33bs5+Hnp23cZRZjNDnvmzV4SdFQJEVIZ+5Tz7pKaMxvcI5wd+hTaLw/39xXrBhElSDiSYbgWvft5OSIc7GpPmGyk/wONh5g8onOiFAAAAABJRU5ErkJggg=="
            fluid
            className="c-avatar-img"
          />
        </div>
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownItem
          header
          tag="div"
          color="light"
          className="text-center"
        >
          <strong>Account</strong>
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-bell" className="mfe-2" />
          Updates
          <CBadge color="info" className="mfs-auto">42</CBadge>
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-envelope-open" className="mfe-2" />
          Messages
          <CBadge color="success" className="mfs-auto">42</CBadge>
        </CDropdownItem>
        <CDropdownItem
          header
          tag="div"
          color="light"
          className="text-center"
        >
          <strong>Settings</strong>
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-user" className="mfe-2" />Profile
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-settings" className="mfe-2" />
          Settings
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default TheHeaderDropdown
