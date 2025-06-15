# 🛠️ Guía de Configuración Google Tag Manager - Modo de Consentimiento

## 🚨 Problema Solucionado

**Error:** "Falta el consentimiento de los usuarios del EEE - Señales de consentimiento inactivas"

**Solución:** Configurar correctamente las variables y triggers de consentimiento en GTM.

---

## 📋 Pasos de Configuración en Google Tag Manager

### **Paso 1: Crear Variables de Consentimiento**

Ve a **Variables** → **Variables definidas por el usuario** → **Nueva**

Crea estas **4 variables de capa de datos**:

#### ✅ **Variable 1: Consentimiento Analytics**
- **Tipo:** Variable de capa de datos
- **Nombre:** `consent_analytics_storage`
- **Nombre de la variable de capa de datos:** `consent_analytics_storage`
- **Valor predeterminado:** `denied`

#### ✅ **Variable 2: Consentimiento Anuncios**
- **Tipo:** Variable de capa de datos  
- **Nombre:** `consent_ad_storage`
- **Nombre de la variable de capa de datos:** `consent_ad_storage`
- **Valor predeterminado:** `denied`

#### ✅ **Variable 3: Consentimiento Datos Usuario**
- **Tipo:** Variable de capa de datos
- **Nombre:** `consent_ad_user_data`
- **Nombre de la variable de capa de datos:** `consent_ad_user_data`
- **Valor predeterminado:** `denied`

#### ✅ **Variable 4: Consentimiento Personalización**
- **Tipo:** Variable de capa de datos
- **Nombre:** `consent_ad_personalization`
- **Nombre de la variable de capa de datos:** `consent_ad_personalization`
- **Valor predeterminado:** `denied`

---

### **Paso 2: Crear Triggers de Consentimiento**

Ve a **Activadores** → **Nuevo**

#### ✅ **Trigger 1: Consentimiento Predeterminado**
- **Nombre:** `Consent Default`
- **Tipo:** Evento personalizado
- **Nombre del evento:** `consent_default`
- **Se activa en:** Todos los eventos personalizados

#### ✅ **Trigger 2: Actualización Consentimiento**  
- **Nombre:** `Consent Update`
- **Tipo:** Evento personalizado
- **Nombre del evento:** `consent_update_.*` (usar coincidencia de expresión regular)
- **Se activa en:** Algunos eventos personalizados
- **Condición:** Event matches RegEx `consent_update_.*`

#### ✅ **Trigger 3: Analytics Consentido**
- **Nombre:** `Analytics Consent Granted`
- **Tipo:** Evento personalizado
- **Nombre del evento:** `consent_update_analytics|consent_update_all` (expresión regular)
- **Se activa en:** Algunos eventos personalizados

---

### **Paso 3: Configurar Etiqueta de Modo de Consentimiento**

Ve a **Etiquetas** → **Nueva**

#### ✅ **Etiqueta: Consent Mode Default**
- **Tipo:** Google Analytics: GA4 Configuration
- **ID de medición:** `G-G15VKZG5HH`
- **Configuración avanzada** → **Campos que configurar:**

| Nombre del campo | Valor |
|------------------|-------|
| `ads_data_redaction` | `true` |
| `url_passthrough` | `true` |
| `consent_ad_storage` | `{{consent_ad_storage}}` |
| `consent_analytics_storage` | `{{consent_analytics_storage}}` |
| `consent_ad_user_data` | `{{consent_ad_user_data}}` |
| `consent_ad_personalization` | `{{consent_ad_personalization}}` |

- **Activador:** `Consent Default`

---

### **Paso 4: Configurar Etiqueta Google Analytics 4**

#### ✅ **Actualizar GA4 Configuration Tag**
- **ID de medición:** `G-G15VKZG5HH`
- **Condición de activación:** Solo cuando `{{consent_analytics_storage}}` equals `granted`
- **Activador:** `Analytics Consent Granted`

---

### **Paso 5: Crear Etiqueta de Conversión (Opcional)**

Si usas Google Ads:

#### ✅ **Conversion Linker Tag**
- **Tipo:** Conversion Linker
- **Configuración:** Activar vinculación entre dominios ✅
- **Condición:** Solo cuando consentimiento de anuncios = granted
- **Activador:** Cuando `{{consent_ad_storage}}` equals `granted`

---

## 🧪 **Paso 6: Probar la Configuración**

### **Preview Mode en GTM:**
1. Haz clic en **Vista previa** en GTM
2. Visita tu sitio web
3. Verifica que aparezcan estos eventos:
   - `consent_default` (carga inicial)
   - `consent_update_analytics` (cuando usuario acepta analytics)
   - `consent_update_all` (cuando usuario acepta todo)

### **Verificar en Analytics Debugger:**
```javascript
// En consola del navegador
console.log(window.dataLayer);

// Debe mostrar eventos como:
// {event: 'consent_default', consent_analytics_storage: 'denied'}
// {event: 'consent_update_analytics', consent_analytics_storage: 'granted'}
```

---

## 🔍 **Eventos de dataLayer Implementados**

Tu sitio web ahora envía estos eventos automáticamente:

### **Al cargar la página:**
```javascript
{
  'event': 'consent_default',
  'consent_ad_storage': 'denied',
  'consent_ad_user_data': 'denied', 
  'consent_ad_personalization': 'denied',
  'consent_analytics_storage': 'denied'
}
```

### **Cuando usuario acepta todo:**
```javascript
{
  'event': 'consent_update_all',
  'consent_ad_storage': 'granted',
  'consent_ad_user_data': 'granted',
  'consent_ad_personalization': 'granted', 
  'consent_analytics_storage': 'granted'
}
```

### **Cuando usuario acepta solo analytics:**
```javascript
{
  'event': 'consent_update_analytics',
  'consent_ad_storage': 'denied',
  'consent_ad_user_data': 'denied',
  'consent_ad_personalization': 'denied',
  'consent_analytics_storage': 'granted'
}
```

### **Cuando usuario rechaza todo:**
```javascript
{
  'event': 'consent_update_denied',
  'consent_ad_storage': 'denied',
  'consent_ad_user_data': 'denied',
  'consent_ad_personalization': 'denied',
  'consent_analytics_storage': 'denied'
}
```

---

## ✅ **Checklist de Verificación**

Después de configurar GTM, verifica:

- [ ] **Variables de consentimiento creadas** (4 variables)
- [ ] **Triggers de consentimiento configurados** (3 triggers)
- [ ] **Etiqueta GA4 con condiciones de consentimiento**
- [ ] **Preview mode muestra eventos de consentimiento**
- [ ] **Google Analytics muestra datos solo con consentimiento**
- [ ] **Console del navegador muestra logs de consentimiento**
- [ ] **No hay errores en Google Tag Assistant**

---

## 🚀 **Publicar los Cambios**

1. **Verifica** que todo funciona en Preview mode
2. **Guarda** todas las configuraciones
3. **Publica** el contenedor GTM
4. **Espera 24-48 horas** para que Google procese las señales
5. **Verifica** en Google Analytics que las señales aparecen como activas

---

## 📞 **Verificación Final**

Después de 24-48 horas de implementación, deberías ver en Google Analytics:

✅ **Señales de consentimiento de analíticas de comportamiento: ACTIVAS**
✅ **Señales de consentimiento de publicidad: ACTIVAS** 
✅ **Sin warnings sobre consentimiento faltante**

Si sigues viendo el error después de 48 horas, contacta con el soporte de Google Analytics con esta información:
- GTM Container ID: `GTM-NFSGV2LS`
- GA4 ID: `G-G15VKZG5HH`
- Confirmación de que el Modo de Consentimiento v2 está implementado
